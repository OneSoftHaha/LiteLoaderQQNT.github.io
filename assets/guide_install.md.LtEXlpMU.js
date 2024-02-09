import{_ as e,c as a,o as i,V as s}from"./chunks/framework.9WoxknMy.js";const u=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install.md","filePath":"guide/install.md","lastUpdated":1707482311000}'),t={name:"guide/install.md"},l=s(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此文档为 LiteLoaderQQNT 1.0.0 编写</p></div><h2 id="第三方工具" tabindex="-1">第三方工具 <a class="header-anchor" href="#第三方工具" aria-label="Permalink to &quot;第三方工具&quot;">​</a></h2><p>一些社区开发的安装工具来帮助你快速安装，或跳过此条目来阅读官方安装教程</p><ul><li><a href="https://github.com/Mzdyl/LiteLoaderQQNT_Install/" target="_blank" rel="noreferrer">https://github.com/Mzdyl/LiteLoaderQQNT_Install/</a></li></ul><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式</p><ul><li><p><strong>通过 Release</strong></p><p>前往 LiteLoaderQQNT 仓库，在 Release 中 Latest 内，下载 <code>LiteLoaderQQNT.zip</code> 文件，将压缩包内 LiteLoaderQQNT 目录解压到任意位置</p><p>LiteLoaderQQNT：<a href="https://github.com/LiteLoaderQQNT/LiteLoaderQQNT" target="_blank" rel="noreferrer">https://github.com/LiteLoaderQQNT/LiteLoaderQQNT</a></p></li><li><p><strong>通过 Clone</strong></p><p>使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone --depth </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.git</span></span></code></pre></div></li></ul><h2 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>找到 QQNT 安装目录，编辑 <code>resources\\app\\app_launcher\\index.js</code> 文件，在最前端插入一行 <code>require(&quot;此处为你 LiteLoaderQQNT 目录路径&quot;);</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LiteLoaderQQNT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 此处换成你 LiteLoaderQQNT 目录位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./launcher.node&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;external_index&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>路径分隔符建议使用 <code>/</code>（通用）或使用 <code>\\\\</code>（仅限 Windows），单独使用 <code>\\</code> 会导致报错</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请确保拥有 QQNT 安装目录的读写权限！如果不想给予 QQNT 安装目录读写权限</p><ul><li>按照下文 <code>存储位置</code> 一节进行设置</li><li>将 <code>LiteLoaderQQNT/src/preload.js</code> 复制到 <code>QQNT/resources/app/versions/此处为版本号/application/preload.js</code></li></ul><p>LiteLoaderQQNT 会在第二步骤的文件不一致或没有文件时自动复制，也就是说在更新本体后需再进行一次这步骤</p></div><h2 id="修补" tabindex="-1">修补 <a class="header-anchor" href="#修补" aria-label="Permalink to &quot;修补&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此条目仅需 Windows 用户查看，其他系统无需继续阅读此条目</p></div><p>由于 Windows 系统平台 QQNT 被添加文件完整性验证，你需要额外步骤来解除限制</p><p>前往 QQNTFileVerifyPatch 仓库，在 Release 中 Latest 内，下载 <code>QQNTPatcher.exe</code> 文件，以管理员身份运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 开始修补，等待输出修补完成即可关闭软件</p><p>QQNTFileVerifyPatch：<a href="https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch" target="_blank" rel="noreferrer">https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch</a></p><h2 id="检查" tabindex="-1">检查 <a class="header-anchor" href="#检查" aria-label="Permalink to &quot;检查&quot;">​</a></h2><p>按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装</p><ul><li>运行 QQNT 并打开设置，查看左侧列表是否出现 <code>LiteLoaderQQNT</code> 选项</li><li>使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示</li></ul><p>如果有显示，即安装成功，玩的开心！</p><h2 id="存储目录" tabindex="-1">存储目录 <a class="header-anchor" href="#存储目录" aria-label="Permalink to &quot;存储目录&quot;">​</a></h2><p>支持设置 <code>LITELOADERQQNT_PROFILE</code> 环境变量指定 <code>data</code> <code>plugins</code> <code>config.json</code> 存储位置，即可不在本体目录进行读写操作，比如 MacOS 与 Linux 平台 QQNT，以及类似于 flatpak 打包的 QQNT，让其实现成为可能</p><p>如果你想将本体与存储目录合并在一起（便携软件）需将 <code>LITELOADERQQNT_PROFILE</code> 环境变量删除，将 <code>data</code> <code>plugins</code> <code>config.json</code> 移动回本体根目录下</p><h2 id="从-0-x-更新" tabindex="-1">从 0.x 更新 <a class="header-anchor" href="#从-0-x-更新" aria-label="Permalink to &quot;从 0.x 更新&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>如果你是 0.x 版本的老用户想升级到 1.x 版本，请阅读此条目</p></div><p>完成上述安装，还原 0.x 版本需修改的 <code>package.json</code> 文件 <code>main</code> 字段</p><ul><li><p><strong>如果你想保留插件数据，比如防撤回的数据</strong></p><ol><li>在存储目录中将 <code>plugins_data</code> 重命名为 <code>data</code></li><li>除 <code>data</code> 外，删除其他所有文件</li><li>根据上述 <code>存储目录</code> 一栏进行操作</li></ol></li><li><p><strong>如果你想完全重新开始，不会保留任何数据</strong></p><ol><li>删除 LiteLoaderQQNT 0.x 版本本体目录</li><li>删除 <code>LITELOADERQQNT_PROFILE</code> 环境变量</li><li>删除 <code>LITELOADERQQNT_PROFILE</code> 存储目录</li><li>删除 <code>QQNT/resources/app/versions/版本号/plugin-preloads.js</code></li></ol></li></ul>`,29),o=[l];function d(r,p,c,n,h,k){return i(),a("div",null,o)}const g=e(t,[["render",d]]);export{u as __pageData,g as default};
