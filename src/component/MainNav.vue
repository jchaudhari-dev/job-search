<template>
    <h1 class="w-full text-sm"></h1>
    <div class="fixed top-0 left-0 w-full bg-white">
        <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
            <a href="/" class="flex items-center h-full text-xl">{{ companyName }}</a>
            <h2 class="ml-8 flex h-full items-center">Developed by {{ author.firstName }} {{ author.lastName }}</h2>
        </div>
    </div>    
</template>

<script>
export default {
    name: "MainNav",
    data(){
      return {
        companyName: "Bobo Carrers",
        author:{
            firstName: "Jayesh",
            lastName: "Patel"
        }
      }
    }
};
</script>