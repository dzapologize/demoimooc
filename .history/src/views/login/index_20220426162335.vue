<template>
  <div class="login-container">
      <!-- username -->
      <el-form class="login-form">
          <div class="title-container">
              <h3 class="title">用户登陆</h3>
          </div>
          <el-form-item>
              <span class="svg-container">
                  <el-icon><avatar /></el-icon>
              </span>
              <el-input placeholder="username" name="username" type="text">请输入用户名</el-input>
          </el-form-item>
      </el-form>
      
      <el-form class="login-form">
          <div class="title-container">
              <h3 class="title">用户登陆</h3>
          </div>
          <el-form-item>
              <span class="svg-container">
                  <el-icon><avatar /></el-icon>
              </span>
              <el-input placeholder="username" name="username" type="text">请输入用户名</el-input>
          </el-form-item>
      </el-form>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
