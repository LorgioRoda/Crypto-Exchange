<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <pxicon class="mr-2" />
          <router-link to='/'>
            <span class="font-semibold text-xl tracking-tight">
              Crypto Exchange
            </span>
          </router-link>
        </div>
        <div class="flex justify-evenly">
            <router-link to='/about' class="font-semibold text-xl tracking-tight text-white"> About </router-link>
        </div>
        <div class="sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import Pxicon from './PxIcon'

export default {
    name: 'PxHeader',
    components: { Pxicon}
}
</script>

