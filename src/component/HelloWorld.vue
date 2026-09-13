<script setup>
defineProps({
    msg:{
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{msg}}</h1>
        <h3>
            Congraulations, you are now working with
            <a href="https://vite.js.dev/" target="_blank"></a>
        </h3>
    </div>
</template>