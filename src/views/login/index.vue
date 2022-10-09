<template>
    <div class="login-container">
        <a-form
            :model="loginForm"
            layout="vertical"
            :style="{
                width: device === 'desktop' ? '20%' : '80%',
                margin: 'auto',
                alignSelf: 'center',
                alignItems: 'center'
            }"
        >
            <a-form-item label="用户名" name="username">
                <a-input v-model:value="loginForm.username" autocomplete="off" size="large">
                    <template #prefix>
                        <user-outlined type="user" />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item label="密码" name="password">
                <a-input v-model:value="loginForm.password" autocomplete="off" type="password" size="large">
                    <template #prefix>
                        <a-icon custom type="icon-password" />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" style="width: 100%" html-type="submit" @click="handleLogin">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" setup>
import Schema from "async-validator"
import { computed, reactive } from "vue"
import { useStore } from "vuex"
import { UserOutlined } from "@ant-design/icons-vue"
import AIcon from "@/components/aicon/index.vue"
import { Rules } from "async-validator"
import { message } from "ant-design-vue"

const store = useStore()
const device = computed(() => store.state.theme.device)
const loginForm = reactive({
    username: "",
    password: ""
})
const rules: Rules = {
    username: [{ type: "string", required: true, message: "用户名不能为空！" }],
    password: [{ type: "string", required: true, message: "密码不能为空！" }]
}
const validator = new Schema(rules)
const handleLogin = () => {
    validator
        .validate(loginForm)
        .then(() => {
            console.log(loginForm)
        })
        .catch(({ errors }) => {
            if (errors.length > 0) {
                message.error(errors[0].message)
            }
        })
}
</script>

<style lang="stylus" scoped>
.login-container {
  display flex
  height 100%
  background-color #f9f9f9
}
</style>
