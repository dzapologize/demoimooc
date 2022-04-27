<template>
  <div class="login-container">
      <el-form class="login-form">
          <div class="title-container">
              <h3 class="title">用户登陆</h3>
          </div>
           <!-- username -->
          <el-form-item>
              <span class="svg-container">
                <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
              </span>
              <el-input placeholder="username" name="username" type="text"></el-input>
          </el-form-item>
          <!-- password -->
          <el-form-item>
              <span class="svg-container">
                  <svg-icon icon="password"></svg-icon>
              </span>
              <el-input placeholder="password" name="password" ></el-input>
              <span class="show-pwd">
                  <span class="svg-container">
                    <svg-icon icon="eye"></svg-icon>
                  </span>
              </span>
          </el-form-item>
          <svg width="130" height="130" xmlns="http://www.w3.org/2000/svg"><path d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z" stroke="#979797"/></svg>
          <!-- 登陆按钮 -->
          <el-button type="primary" style="width:100%; margin-bottom:30px;">登陆</el-button>
      </el-form>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
}

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
  position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
</style>
