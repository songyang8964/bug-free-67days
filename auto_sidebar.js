const fs = require('fs');
const path = require('path');

// ================= 配置区域 =================

// 你的文档根目录名称
const ROOT_DIR = 'zh-cn';
// 侧边栏文件位置
const TARGET_FILE = path.join(ROOT_DIR, '_sidebar.md');

// 定义显示的顺序和标题映射
// 格式: { dir: '文件夹名', title: '侧边栏显示的标题' }
const ORDER_CONFIG = [
    { dir: '每日任务', title: '每日任务' },
    { dir: '日记', title: '刷题日记' },
    { dir: 'Array', title: '数组 (Array)' },
    { dir: 'LinkedList', title: '链表 (LinkedList)' },
    { dir: 'HashMap', title: '哈希表 (HashMap)' },
    // 如果有新分类（如 Stack），可以在这里继续添加，或者脚本会自动放到最后
];

// ================= 逻辑区域 =================

function formatTitle(filename) {
    // 去掉 .md 后缀
    let name = filename.replace('.md', '');

    // 规则1: 处理 LeetCode 格式 (如 Leetcode27_移除元素 -> 027. 移除元素)
    // 正则解释: 匹配 "Leetcode" + 数字 + "_" + 任意字符
    const leetcodeMatch = name.match(/^Leetcode(\d+)_(.+)$/i);
    if (leetcodeMatch) {
        let num = leetcodeMatch[1];
        let text = leetcodeMatch[2];
        // 补全3位数字，例如 27 -> 027
        num = num.padStart(3, '0');
        return `${num}. ${text}`;
    }

    // 规则2: 处理纯英文 LeetCode (如 Leetcode303_RangeSum -> 303. RangeSum)
    const leetcodeEnMatch = name.match(/^Leetcode(\d+)_(.+)$/i); // 实际上同上，通用匹配

    // 规则3: 处理任务/日记 (如 12.17.md -> 12.17)
    // 如果你想显示 "12.17 任务"，可以在这里改：return `${name} 任务`;

    return name; // 默认直接返回文件名
}

function generateSidebar() {
    let content = '* 首页\n  * [简介](zh-cn/README.md)\n\n';

    // 获取 zh-cn 下所有的子目录
    const allDirs = fs.readdirSync(ROOT_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    // 提取配置中定义的目录
    const configDirs = ORDER_CONFIG.map(item => item.dir);

    // 找出未在配置中定义的目录（新加的分类），放到最后
    const otherDirs = allDirs.filter(dir => !configDirs.includes(dir) && !dir.startsWith('.'));

    // 合并列表：优先按配置顺序，剩下的按字母顺序
    const finalDirList = [...ORDER_CONFIG, ...otherDirs.map(d => ({ dir: d, title: d }))];

    finalDirList.forEach(item => {
        const dirPath = path.join(ROOT_DIR, item.dir);

        // 检查目录是否存在（防止配置里写了但文件夹还没建）
        if (!fs.existsSync(dirPath)) return;

        // 获取该目录下的 .md 文件
        const files = fs.readdirSync(dirPath)
            .filter(file => file.endsWith('.md') && file !== 'README.md');

        if (files.length === 0) return; // 如果文件夹为空，不显示

        // 添加分类标题
        content += `* ${item.title}\n`;

        // 文件排序：尝试按 Leetcode 题号排序，或者日期排序
        files.sort((a, b) => {
            // 提取数字进行比较 (比如 Leetcode27 vs Leetcode209)
            const numA = (a.match(/(\d+)/) || ['0'])[0];
            const numB = (b.match(/(\d+)/) || ['0'])[0];
            return parseInt(numA) - parseInt(numB);
        });

        // 生成文件列表
        files.forEach(file => {
            const displayName = formatTitle(file);
            // 拼接路径: zh-cn/Array/xxx.md
            // 使用 path.posix.join 确保生成的是斜杠 / (即使在 Windows 上)
            const linkPath = path.posix.join(ROOT_DIR, item.dir, file);

            content += `  * [${displayName}](${linkPath})\n`;
        });

        content += '\n'; // 分类之间空一行
    });

    fs.writeFileSync(TARGET_FILE, content);
    console.log('✅ Sidebar 更新成功！已自动美化题号格式。');
}

generateSidebar();