# 图片替换命名规则与清单

> 用法：按本指南把新图按指定文件名放到指定目录，然后告诉 Claude "图片放好了，按命名清单更新 site.ts"，即可一次性完成。

---

## 文件格式

- 推荐 **`.webp`**（体积小、网站现有图片都是这个格式）
- `.jpg` / `.png` 也可以，但**整套必须统一**一种扩展名（不要混用）
- 如果用 .jpg/.png，告诉 Claude 一声即可

---

## A. 产品详情页 gallery（重点 / 必做，17 个产品 × 3 张 = 51 张）

**存放位置**：`public/assets/products/gallery/`

**命名规则**：`{产品slug}-{序号}.webp`
- 序号为 `1` / `2` / `3`，按希望出现的主图顺序排
- 1 号 = 首张主图，缩略图也按 1 → 2 → 3 顺序排列

**完整 51 张文件名清单**：

```
# MCB 类（8 个产品）
ac-mcb-1p-1.webp   ac-mcb-1p-2.webp   ac-mcb-1p-3.webp
ac-mcb-2p-1.webp   ac-mcb-2p-2.webp   ac-mcb-2p-3.webp
ac-mcb-3p-1.webp   ac-mcb-3p-2.webp   ac-mcb-3p-3.webp
ac-mcb-4p-1.webp   ac-mcb-4p-2.webp   ac-mcb-4p-3.webp
dc-mcb-1p-1.webp   dc-mcb-1p-2.webp   dc-mcb-1p-3.webp
dc-mcb-2p-1.webp   dc-mcb-2p-2.webp   dc-mcb-2p-3.webp
dc-mcb-3p-1.webp   dc-mcb-3p-2.webp   dc-mcb-3p-3.webp
dc-mcb-4p-1.webp   dc-mcb-4p-2.webp   dc-mcb-4p-3.webp

# SPD 类（4 个产品）
ac-spd-1.webp              ac-spd-2.webp              ac-spd-3.webp
dc-spd-1.webp              dc-spd-2.webp              dc-spd-3.webp
green-spd-series-1.webp    green-spd-series-2.webp    green-spd-series-3.webp
white-spd-series-1.webp    white-spd-series-2.webp    white-spd-series-3.webp

# 其它类（5 个产品）
over-voltage-protector-1.webp   over-voltage-protector-2.webp   over-voltage-protector-3.webp
ats-1.webp                       ats-2.webp                       ats-3.webp
plastic-box-series-1.webp        plastic-box-series-2.webp        plastic-box-series-3.webp
metal-box-series-1.webp          metal-box-series-2.webp          metal-box-series-3.webp
din-rail-energy-meter-1.webp     din-rail-energy-meter-2.webp     din-rail-energy-meter-3.webp
```

> **缺图说明**：某产品只准备 2 张就只放 `-1` 和 `-2`，第 3 个位置自动用 `-1` 占位。完全没准备的产品保持原样不放也行。

---

## B. 产品列表 / 分类页主图（选做，17 张）

**当前情况**：列表卡片、分类页缩略图共用 6 张大类图，导致同类下的多个产品长得一样。

**存放位置**：`public/assets/products/main/`

**命名规则**：`{产品slug}.webp`（不带序号）

```
ac-mcb-1p.webp,  ac-mcb-2p.webp,  ac-mcb-3p.webp,  ac-mcb-4p.webp,
dc-mcb-1p.webp,  dc-mcb-2p.webp,  dc-mcb-3p.webp,  dc-mcb-4p.webp,
ac-spd.webp,  dc-spd.webp,  green-spd-series.webp,  white-spd-series.webp,
over-voltage-protector.webp,  ats.webp,
plastic-box-series.webp,  metal-box-series.webp,  din-rail-energy-meter.webp
```

> **偷懒做法**：直接用 gallery 的 `-1.webp` 当主图，B 步就不用单独准备，告诉 Claude "主图复用 gallery-1" 即可。

---

## C. 首页 6 大品类卡片（选做，6 张）

**存放位置**：`public/assets/home-products-normalized/`（直接覆盖现有同名文件）

```
mcb.webp
spd.webp
over-voltage-protector.webp
ats.webp
combiner-box.webp
din-rail-energy-meter.webp
```

---

## D. 首页大 Hero 图（选做，1 张）

**位置**：`public/assets/hero-products.webp`（直接覆盖）

---

## E. 博客封面（选做，6 张）

**存放位置**：`public/assets/blog/`（直接覆盖现有同名文件）

```
mcb-guide.webp        # 文章：How to Choose the Right MCB
spd-surge.webp        # 文章：Understanding SPD
ats-system.webp       # 文章：ATS in Modern Power Distribution
combiner-box.webp     # 文章：Solar Combiner Box
energy-meter.webp     # 文章：Energy Meter Selection Guide
exhibition.webp       # 文章：TPKELE at SNEC 2026
```

---

## F. 关于页（选做，7 张）

**存放位置**：`public/assets/about/`（直接覆盖现有同名文件）

```
building.webp                                              # 公司大楼
factory-1.webp / factory-2.webp / factory-3.webp           # 工厂车间
exhibition-1.webp / exhibition-2.webp / exhibition-3.webp  # 展会
```

---

## 完成后告诉 Claude（示例）

> 图片放好了，A 类全做了；B 类用 gallery-1 复用；C/D 没换；E 只换了 mcb-guide 和 spd-surge；F 全换了。扩展名 .webp。

Claude 会一次性扫描目录、更新 `src/data/site.ts` 的 `image` 和 `gallery` 字段，1 轮完成。

---

## ⚠️ 命名注意事项

- **全小写**，**不能有空格**，单词间用 `-` 连字符
- slug 必须**严格匹配** A 类清单（多/少一个字母都会匹配不上）
- 序号是 `-1` `-2` `-3`，**不是** `_1` 或 `(1)` 或 `01`

---

## 产品 slug 速查表

| 类目 | slug |
|---|---|
| MCB | ac-mcb-1p, ac-mcb-2p, ac-mcb-3p, ac-mcb-4p, dc-mcb-1p, dc-mcb-2p, dc-mcb-3p, dc-mcb-4p |
| SPD | ac-spd, dc-spd, green-spd-series, white-spd-series |
| Voltage Protector | over-voltage-protector |
| ATS | ats |
| Combiner Box | plastic-box-series, metal-box-series |
| Energy Meter | din-rail-energy-meter |
