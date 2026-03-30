import fs from "node:fs";
import path from "node:path";

const SOURCE_PATH = path.resolve("assets/data/site-data-formatted.json");
const BUILD_PATH = path.resolve("assets/data/site-data.json");
const PROMPT_REQUIRED_FIELDS = [
  "id",
  "kind",
  "kind_en",
  "title",
  "title_en",
  "summary",
  "summary_en",
  "prompt",
  "prompt_zh",
  "prompt_en"
];

const errors = [];

function readJson(filePath, label) {
  let raw;

  try {
    raw = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    errors.push(`${label} 不存在或不可读取: ${filePath}`);
    return { data: null, raw: "" };
  }

  if (!raw.trim()) {
    errors.push(`${label} 为空文件: ${filePath}`);
    return { data: null, raw };
  }

  try {
    return { data: JSON.parse(raw), raw };
  } catch (error) {
    errors.push(`${label} 不是合法 JSON: ${filePath}`);
    return { data: null, raw };
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function collectDuplicateIds(items) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of items) {
    if (!item || typeof item !== "object" || !("id" in item)) {
      continue;
    }

    const id = item.id;
    if (!isNonEmptyString(id)) {
      duplicates.add("[empty-id]");
      continue;
    }

    if (seen.has(id)) {
      duplicates.add(id);
      continue;
    }

    seen.add(id);
  }

  return Array.from(duplicates).sort();
}

function validateTopLevelCollections(data) {
  const collections = Object.entries(data).filter(([, value]) => Array.isArray(value));

  for (const [name, items] of collections) {
    const idItems = items.filter((item) => item && typeof item === "object" && "id" in item);
    if (!idItems.length) {
      continue;
    }

    const duplicates = collectDuplicateIds(idItems);
    if (duplicates.length) {
      errors.push(`${name} 存在重复 id: ${duplicates.join(", ")}`);
    }
  }
}

function validatePromptTemplates(data) {
  if (!Array.isArray(data.promptTemplates)) {
    errors.push("promptTemplates 缺失或不是数组。");
    return;
  }

  for (const prompt of data.promptTemplates) {
    const promptId = isNonEmptyString(prompt?.id) ? prompt.id : "[missing-id]";

    for (const field of PROMPT_REQUIRED_FIELDS) {
      if (!isNonEmptyString(prompt?.[field])) {
        errors.push(`promptTemplates/${promptId} 缺少双语字段: ${field}`);
      }
    }
  }
}

function validateBuildSync(sourceData, buildRaw) {
  const expected = JSON.stringify(sourceData);

  if (buildRaw !== expected) {
    errors.push("构建产物 assets/data/site-data.json 与源文件不同步。请运行 npm run build。");
  }
}

const source = readJson(SOURCE_PATH, "源文件");
const build = readJson(BUILD_PATH, "构建产物");

if (source.data) {
  validateTopLevelCollections(source.data);
  validatePromptTemplates(source.data);
}

if (source.data && build.data) {
  validateBuildSync(source.data, build.raw);
}

if (errors.length) {
  console.error("site-data 校验失败:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("site-data 校验通过");
console.log(`- 源文件: ${SOURCE_PATH}`);
console.log(`- 构建产物: ${BUILD_PATH}`);
console.log(`- cards: ${Array.isArray(source.data.cards) ? source.data.cards.length : 0}`);
console.log(`- promptTemplates: ${Array.isArray(source.data.promptTemplates) ? source.data.promptTemplates.length : 0}`);
