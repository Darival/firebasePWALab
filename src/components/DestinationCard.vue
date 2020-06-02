<template>
  <div class="flex rounded-lg bg-white shadow-lg overflow-hidden">
    <div class="relative w-1/3">
      <img
        class="absolute inset-0 h-full w-full object-cover object-center"
        :src="destination.imageUrl"
        :alt="destination.imageAlt"
      />
    </div>
    <div class="px-6 py-4 w-2/3">
      <h3 class="text-lg font-semibold text-gray-800">
        {{ destination.city }}
      </h3>
      <p class="text-gray-600">
        ${{ destination.averagePrice }} / night average
      </p>
      <div class="mt-4">
        <a
          href="#"
          class="text-brand-color hover:text-indigo-400 font-semibold text-sm"
          >Explore {{ destination.propertyCount }} properties</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DestinationCard",
  props: {
    destination: {
      type: Object,
      required: true,
    },
  },
};
</script>
