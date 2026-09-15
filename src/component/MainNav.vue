<template>
    <h1 class="w-full text-sm"></h1>
    <div class="fixed top-0 left-0 w-full bg-white">
        <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
            <a v-bind:href = "url" href="/" class="flex items-center h-full text-xl">{{ companyName }}</a>
            <nav clas="ml-12 h-full">
                <ul class="flex h-full list-none">
                    <li class ="ml-9 h-full" v-for = "item in menuItems" :key="item">
                        <a href="" class="flex h-full items-center py-2.5">{{ item }}</a>
                    </li>
                
                </ul>
            </nav>
        </div>
    </div>    
</template>

<script>
export default {
    name: "MainNav",
    data(){
      return {
        companyName: "Bobo Carrers",
        url:"https://careers.google.com",
        menuItems: [
            "Locations",
            "About",
            "Contact",
            "How we hire",
            "Jobs"
        ]
      }
    }
};
</script>