<template>
  <div class="login-container">
      <el-form class="login-form">
          <div class="title-container">
              <h3 class="title">用户登陆</h3>
          </div>
           <!-- username -->
          <el-form-item>
              <span class="svg-container">
                  <el-icon><avatar /></el-icon>
              </span>
              <el-input placeholder="username" name="username" type="text">请输入用户名</el-input>
          </el-form-item>
          <!-- password -->
          <el-form-item>
              <span class="svg-container">
                  <el-icon><avatar /></el-icon>
              </span>
              <el-input placeholder="password" name="password" >请输入密码</el-input>
              <span class="show-pwd">
                  <el-icon><avatar /></el-icon>
          </span>
          </el-form-item>

          <!-- 登陆按钮 -->
          <el-button type="primary" style="width:100%; margin-bottom:30px;">登陆</el-button>
      </el-form>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
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
</style>
