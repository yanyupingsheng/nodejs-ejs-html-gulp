# nodejs-ejs-html-gulp

nodejs + ejs（转为html）+gulp   搭建项目结构

1 安装运行环境   Node.JS 和 NPM
这很容易，进入Node.js官方网站，点击绿色的大Install按钮，它会自动检测你的系统并给你一个正确的安装文件的下载。（如果没有，点击Download按钮选择你需要的下载）。运行安装程序，这样就好了。你已经装上了Node.js，和NPM（Node包管理器）可以让你很容易的安装各种有用的包到Node里。

2 打开终端窗口，cd 进到项目目录里
比如c：\ yzk


3 安装 express
npm install -g express   /   cnpm install -g express


4 创建一个express项目
比如：express -e yzk  （-e表示ejs模板，yzk表示项目名称）


5 编辑依赖项： package.json文件
如果需要用到某些依赖，可以手动添加到package.json的依赖项里面，比如mongodb



6 安装依赖：
 首先进入到项目目录下：  cd  /yzk  
 开始安装依赖： npm install


7 启动项目
npm start 



在浏览器打开，默认端口是 3000

说明项目启动成功。

8 修改启动项目的配置
默认如下所示：



为了项目统一，把启动文件的名字改成和项目名一样的名字（可以不改，看个人喜欢）：

修改端口号：


命令行  按 ctrl + c 停止项目，在 运行 npm start 重启 yzk 项目

如上图所示，说明新的端口号已经启动成功。


9 修改 app.js 配置，使得可以识别html模板
默认情况下，我们是以ejs模板创建项目，是不会识别html模板的

我们在views里面确实看到的使用是ejs模板的，下面修改成能够识别html模板的

重新启动yzk项目，页面加载成功，说明修改已经生效：

如果对于ejs不熟的，那么使用HTML应该很顺手了。

10 配置 gulp
（1）全局安装gulp：   
 npm install --global gulp

（2） 作为项目的开发依赖（devDependencies）安装：
 npm install --save-dev gulp  


（3） 在项目根目录下创建一个名为 gulpfile.js 的文件：


（4） 运行 gulp：

默认的名为 default 的任务（task）将会被运行，在这里，这个任务并未做任何事情。想要单独执行特定的任务（task），请输入 gulp <task> <othertask>。

（5）以下是一个简单打包css的案例：




运行gulp：


这个dist文件夹就是我们在上面配置task任务里面设置的打包后路径，没有则会自动生成改文件夹。这里只是配置css的打包，其他的html，js都同理，只需要给它们定义单独的task任务，然后加到default任务数组里面，再分别监听它们即可。此时页面显示也是ok的：


以上就是本章标题的NodeJS-EJS-HTML-一饮而尽完整案例展示，希望给大家有所助。由于截图的图片显示，我把截图放到代码的案例图片里面，以供参考！










