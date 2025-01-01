### remainzvue(vue.jsプロジェクト)

---
### vue.js環境構築手順

- 最初にnode.jsをインストールする。(公式サイトでインストーラをダウンロード)  
https://nodejs.org/en
- 必ずLTS版のインストーラをダウンロードすること。  
インストール時はオプションを一切変更せず、全て「Next」でインストールする。
- インストール完了後は、次のコマンドを実行して確認する。  
(いずれもバージョン情報が表示されたら、インストールできている)
```
node -v
npm -v
```
- 次のコマンドにより、vue.jsのCLI(Command Line Interface)をインストールする。
```
npm install -g @vue/cli
```
- 次のコマンドによりバージョンが表示されれば、vue.jsのインストールは完了している。
```
vue --version
```

---
### vueプロジェクトの作成

- 次のコマンドを実行し、vueプロジェクトを作成する。
```
cd [vueプロジェクトディレクトリ]
vue create [vueアプリ名]
＜例＞
cd C:\10_local\60_github
vue create remainzvue
```
- 生成されたvueプロジェクト位置に移動する。
```
cd [vueアプリ名]
＜例＞
cd remainzvue
```
- 次のコマンドにより、ローカルサーバを起動する。
```
npm run serve
```
- コマンド実行後、ブラウザから次のURLにアクセスできることを確認する。
http://localhost:8080/

---
### vue-routerの設定

- vue-routerとはURLパターンとソースを対応づける仕組み。
- 次のコマンドを実行し、vue routerがインストールされているか確認する。
```
npm list vue-router
```
- (empty)ならインストールされていない。その場合は、次のコマンドを実行する。  
※　一度実行していれば2回目以降、この手順は必要ない。
```
npm install vue-router
```
- もう一度vue-routerの確認コマンドを実行し、次のような表示となれば問題ない。
```
npm list vue-router
```
- 「src」直下にある「main.js」に、vue-routerを使用する記述を追加する。
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // ルーターのインポート

createApp(App).use(router).mount('#app') // ".use(router)"を追加する
```
- 「src」配下に「router」フォルダを作成し、「index.js」を配置する。  
- 「index.js」の内容は、次の通りとする。
```
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // HOME画面をインポート
import NewPage from '../views/Top.vue'; // TOP画面をインポート

const routes = [
  {
    path: '/', // HOME画面のURLパターン
    name: 'Home',
    component: Home,
  },
  {
    path: '/top', // TOP画面のURLパターン
    name: 'Top',
    component: Top,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```
- 「src」配下に「views」フォルダを作成し、画面のソースコードを追加する。  
Home.vue
Top.vue
- 「Home.vue」の内容は、次の通り。
```
<template>
  <div>
    <h1>Home Page</h1>
    <p>This is Home Page.</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
}
</script>

<style scoped>
</style>
```
- 「Top.vue」の内容は、次の通り。

```
<template>
  <div>
    <h1>Top Page</h1>
    <p>This is Top Page.</p>
  </div>
</template>

<script>
export default {
  name: "TopPage",
}
</script>

<style scoped>
</style>
```
- 「src」配下の「App.vue」に追加したページのリンクを記述する。  
なお次のコードではデフォルトの表示内容をコメント化し、追加したコードの表示のみとしている。
```
<template>

<!-- 次のコードを有効にすると、vue.jsデフォルトのページを表示できる。
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
-->

  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/top">Top Page</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// 次のコードを有効にすると、vue.jsデフォルトのページを表示できる。
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

// 次のコードを有効にすると、vue.jsデフォルトのページを表示できる。
//  components: {
//    HelloWorld
//  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>
```
- 次のURLにアクセスする。  
デフォルトのWelcomeページの内容が消え、追加したソースが表示されていれば成功。
http://localhost:8080/top
- なおこの状態で、次のような存在しないURLパターンを入力すると「App.vue」の内容が表示される。  
http://localhost:8080/error

---
### 開発の勘所
- 上記手順を全て実施したら、後は次の要領でプログラムを拡張していく。
- 「Home.vue」や「Top.vue」のように、URLパターンと対応する「～.vue」のソースを「src/views」に追加する。
- 共通的な画面部品がある場合は「src/components」に追加する。(これを「src/views」でインポートする)
- 画面構成のソースコードが準備できたら、画面遷移ができることを確認する。  
※　画面間のリンクは「App.vue」にある通り、次のタグを用いること。
```
<router-link to="[URLパターン]">[表示文字]</router-link>
```
- 画面遷移が固まったら、中身のHTMLを本格的に記述する。  
共通部品を適宜「components」に追加し、各画面の見た目を整えていく。  
表示するデータはダミーとする。  
→　本来はAPIを呼び出し、レスポンス(JSON形式)で画面表示内容を受け取って画面表示するが、  
　　この段階ではダミーデータ表示とする。
- API呼び出しのコードを記述し、バックエンドと連動して画面が動くことを確認する。
- モーダルやクライアントストレージなど、さまざまテクニックがあるが、それは個別で調査して実装する。
