<!--
    Default layout used by all the page
-->
<template>
    <div class=" max-w-[2050px] mx-auto">
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
    <div class="hidden max-w-[2050px] mx-auto">
        <h1 class="text-3xl">
            Still constructing...
        </h1>
    </div>
</template>

<!--style>
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: lightgoldenrodyellow;
    margin: 0;
}
</style-->