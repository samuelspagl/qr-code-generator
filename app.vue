<template>
  <div class="bg-surface-50 min-h-screen flex flex-col items-center ">
    <div class=" px-4 md:px-0 max-w-7xl w-full">
      <header class="flex gap-x-4 items-center justify-between p-2">
        <div class="flex gap-x-4 items-center">
          <div class="w-12 aspect-square bg-primary flex items-center justify-center rounded-xl">
            <i class="pi pi-qrcode text-white"></i>
          </div>
          <h1>{{ $t('websiteTitle') }}</h1>
        </div>
        <div>
          <Select v-model="selectedLocale" :options="locales" optionLabel="name" @change="selectLocale"></Select>
        </div>

      </header>

      <main class="space-y-5 grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <section>
          <h2>{{ $t('previewSection.title') }}</h2>
          <div class="flex justify-center items-center">
            <div class="object-cover overflow-hidden w-full h-full stuff flex justify-center" ref="canvas" id="canvas"></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <Button class="self-end" @click="downloadPreview" :label="$t('previewSection.downloadPreviewPng')"></Button>
            <Button class="self-end" @click="downloadSet" :label="$t('previewSection.downloadSet')"></Button>
          </div>
        </section>

        <section>
          <h2>{{ $t('generalSection.title') }}</h2>
          <div class="space-y-5">
            <Fieldset :legend="$t('generalSection.dataFieldset.title')">
              <div class="space-y-4">
                <!-- <SelectButton class="w-96" :invalid="!dataSelectorType" v-model="dataSelectorType"
                  :options="[$t('generalSection.dataFieldset.singleDataSelector'), $t('generalSection.dataFieldset.multipleDataSelector')]" /> -->
                <div class="flex items-center gap-4" v-for="data in qrCodeData.length">
                  <InputText class=" w-56 md:w-full" v-model="qrCodeData[data - 1]"></InputText>
                  <Button size="small"
                    @click="qrCodeData.splice(data - 1, 1)" icon="pi pi-minus" />
                </div>
                <div
                  class="flex items-center gap-4">
                  <InputText class=" w-56 md:w-full" v-model="newQRCodeData"></InputText>
                  <Button size="small" @click="addQRCodeData"
                    icon="pi pi-plus" />
                </div>
              </div>
            </Fieldset>
            <Fieldset :legend="$t('generalSection.exportFieldset.title')">
              <div class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatLabel variant="on">
                    <InputNumber class="w-full" v-model="width" inputId="on_label" />
                    <label for="on_label">{{ $t('generalSection.exportFieldset.width') }}</label>
                  </FloatLabel>
                  <FloatLabel variant="on">
                    <InputNumber class="w-full" v-model="height" inputId="on_label" />
                    <label for="on_label">{{ $t('generalSection.exportFieldset.height') }}</label>
                  </FloatLabel>
                </div>
                <FloatLabel class="w-full md:w-80" variant="on">
                  <MultiSelect id="on_label" v-model="selectedExportTypes" display="chip" :options="possibleExportTypes"
                    optionLabel="name" filter :maxSelectedLabels="3" class="w-full md:w-80" />
                  <label for="on_label">{{ $t('generalSection.exportFieldset.filetypes') }}</label>
                </FloatLabel>
              </div>
            </Fieldset>
            <!-- <Fieldset :legend="$t('generalSection.importFieldset.title')">
              <Button :label="$t('generalSection.importFieldset.importButton')"></Button>
            </Fieldset> -->
          </div>
        </section>

        <section>
          <h2>{{ $t('logoSection.title') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="flex gap-3 justify-between">
                <FileUpload mode="basic" @select="onFileSelect" customUpload auto severity="secondary" class="flex-grow" />
                <Button class="flex-grow-0" icon="pi pi-trash" @click="logo = undefined"/>
              </div>
              <div class="flex gap-3">
                    <span>{{ $t('logoSection.optionsFieldset.hideBackgroundDots') }}</span>
                    <ToggleSwitch v-model="hideBackgroundDots"/>
                  </div>
                  <FloatLabel variant="on">
                      <InputNumber class="w-full" v-model="imageSize" inputId="on_label" />
                      <label for="on_label">{{ $t('logoSection.optionsFieldset.imageSize') }}</label>
                  </FloatLabel>
                    <FloatLabel variant="on">
                      <InputNumber class="w-full" v-model="imageMargin" inputId="on_label" />
                      <label for="on_label">{{ $t('logoSection.optionsFieldset.imageMargin') }}</label>
                  </FloatLabel>
                </div>
        </section>

        <section>
          <h2>{{ $t('backgroundSection.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center gap-4">
              <ColorPicker class="border border-surface-300 rounded-lg aspect-square" v-model="backgroundColor" />
              <InputText class="flex-grow" v-model="backgroundColor" />
            </div>
            <div class="flex items-center gap-4">
              <ToggleSwitch v-model="backgroundTransparent" />
              <span>{{ $t('backgroundSection.transparent') }}</span>
            </div>
          </div>
        </section>

        <section>
          <h2>{{ $t('baseStyleSection.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center gap-4">
              <ColorPicker class="border border-surface-300 rounded-lg aspect-square" v-model="dotColor" />
              <InputText class="flex-grow" v-model="dotColor" />
            </div>
            <FloatLabel class="w-full" variant="on">
              <Select id="on_label" v-model="selectedDotTypes" optionLabel="name" :options="possibleDotTypes"
                class="w-full">
                <template #value="slotProps">
                  <span>{{ $t(slotProps.value.name) }}</span>
                </template>

                <template #option="slotProps">
                  <span>{{ $t(slotProps.option.name) }}</span>
                </template>
              </Select>
              <label for="on_label">{{ $t('baseStyleSection.dotTypeTitle') }}</label>
            </FloatLabel>
          </div>
        </section>

        <section>
          <h2>{{ $t('innerCornersSection.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center gap-4">
              <ColorPicker class="border border-surface-300 rounded-lg aspect-square" v-model="innerCornerColor" />
              <InputText class="flex-grow" v-model="innerCornerColor" />
            </div>
            <FloatLabel class="w-full" variant="on">
              <Select id="on_label" v-model="selectedInnerCornerTypes" optionLabel="name"
                :options="possibleInnerCornerTypes" class="w-full">
                <template #value="slotProps">
                  <span>{{ $t(slotProps.value.name) }}</span>
                </template>
                <template #option="slotProps">
                  <span>{{ $t(slotProps.option.name) }}</span>
                </template>
              </Select>
              <label for="on_label">{{ $t('baseStyleSection.dotTypeTitle') }}</label>
            </FloatLabel>
          </div>
        </section>

        <section>
          <h2>
            {{ $t('outerCornersSection.title') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center gap-4">
              <ColorPicker class="border border-surface-300 rounded-lg aspect-square" v-model="outerCornerColor" />
              <InputText class="flex-grow" v-model="outerCornerColor" />
            </div>
            <FloatLabel class="w-full" variant="on">
              <Select id="on_label" v-model="selectedOuterCornerTypes" optionLabel="name"
                :options="possibleOuterCornerTypes" class="w-full">
                <template #value="slotProps">
                  <span>{{ $t(slotProps.value.name) }}</span>
                </template>
                <template #option="slotProps">
                  <span>{{ $t(slotProps.option.name) }}</span>
                </template>
              </Select>
              <label for="on_label">{{ $t('baseStyleSection.dotTypeTitle') }}</label>
            </FloatLabel>
          </div>
        </section>
      </main>

      <footer class="bg-surface-900 p-4 rounded-t-2xl flex flex-col gap-3 text-white text-center">
        <p class="text-xs">A free service with no external dependencies</p>
        <p class="text-center">Made with ❤ by Säm</p>
        <p class="text-xs">VueJS - NuxtJS - i18n - JSZip - qr-code-styling</p>
      </footer>
    </div>
  </div>
</template>


<script setup lang="ts">
import JSZip from 'jszip'
import type { SelectChangeEvent } from 'primevue'
import QRCodeStyling from 'qr-code-styling'
import type { CornerDotType, CornerSquareType, DotType, DrawType } from 'qr-code-styling'


useSeoMeta({
  ogImage: '/og.png',
  title: 'QR-Code Generator',
  ogTitle: 'QR-Code Generator',
  description: 'Generate beautiful QR-Codes at easy. Nothing saved anywhere. Everything rendered on your device.',
  ogDescription: 'Generate beautiful QR-Codes at easy. Nothing saved anywhere. Everything rendered on your device.',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

const { locales, setLocale, } = useI18n()

const browserLocale = useBrowserLocale()
setLocale(browserLocale)
const selectedLocale = ref(locales.value.find((el)=>el.code == browserLocale))

const selectLocale = (event: SelectChangeEvent)=>{
  setLocale(event.value.code)
}

const qrCodeData = ref(["https://google.com"])
const newQRCodeData = ref("")
const addQRCodeData = () => {
  qrCodeData.value.push(newQRCodeData.value)
  newQRCodeData.value = ""
}

const dataSelectorType = ref("Single")


const width = ref(400)
const height = ref(400)

const possibleExportTypes = ref([
  { name: 'SVG', code: 'svg' },
  { name: 'JPG', code: 'jpg' },
  { name: 'PNG', code: 'png' },
  { name: 'WEBP', code: 'webp' },
])
const selectedExportTypes = ref([{ name: 'SVG', code: 'svg' }])

const logo = ref(null)
const hideBackgroundDots = ref(true)
const imageSize = ref(0.4)
const imageMargin = ref(0)

function onFileSelect(event) {
    const file = event.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
        logo.value = e.target.result;
    };

    reader.readAsDataURL(file);
}

const backgroundColor = ref('FFFFFF')
const backgroundTransparent = ref(false)

const dotColor = ref("000000")
const possibleDotTypes = ref([
  { name: 'baseStyleSection.dotType.square', code: 'square' },
  { name: 'baseStyleSection.dotType.rounded', code: 'rounded' },
  { name: 'baseStyleSection.dotType.dots', code: 'dots' },
  { name: 'baseStyleSection.dotType.classy', code: 'classy' },
  { name: 'baseStyleSection.dotType.classyRounded', code: 'classy-rounded' },
  { name: 'baseStyleSection.dotType.extraRounded', code: 'extra-rounded' },
])
const selectedDotTypes = ref(possibleDotTypes.value[0])

const innerCornerColor = ref("000000")
const possibleInnerCornerTypes = ref([
  { name: 'baseStyleSection.innerCornerType.square', code: 'square' },
  { name: 'baseStyleSection.innerCornerType.rounded', code: 'rounded' },
  { name: 'baseStyleSection.innerCornerType.dot', code: 'dot' },
  { name: 'baseStyleSection.innerCornerType.dots', code: 'dots' },
  { name: 'baseStyleSection.innerCornerType.classy', code: 'classy' },
  { name: 'baseStyleSection.innerCornerType.classyRounded', code: 'classy-rounded' },
  { name: 'baseStyleSection.innerCornerType.extraRounded', code: 'extra-rounded' },
])
const selectedInnerCornerTypes = ref(possibleInnerCornerTypes.value[0])

const outerCornerColor = ref("000000")
const possibleOuterCornerTypes = ref([
  { name: 'baseStyleSection.outerCornerType.square', code: 'square' },
  { name: 'baseStyleSection.outerCornerType.rounded', code: 'rounded' },
  { name: 'baseStyleSection.outerCornerType.dot', code: 'dot' },
  { name: 'baseStyleSection.outerCornerType.dots', code: 'dots' },
  { name: 'baseStyleSection.outerCornerType.classy', code: 'classy' },
  { name: 'baseStyleSection.outerCornerType.classyRounded', code: 'classy-rounded' },
  { name: 'baseStyleSection.outerCornerType.extraRounded', code: 'extra-rounded' },
])
const selectedOuterCornerTypes = ref(possibleOuterCornerTypes.value[0])

const generateStyling = () => {
  return {
    width: width.value || 400,
    height: height.value || 400,
    type: "png" as DrawType,
    data: qrCodeData.value[0],
    image: logo.value,
    dotsOptions: {
      color: "#" + dotColor.value,
      type: selectedDotTypes.value.code as DotType
    },
    backgroundOptions: {
      color: "#" + backgroundColor.value,
    },
    cornersSquareOptions: {
      color: "#" + innerCornerColor.value,
      type: selectedInnerCornerTypes.value.code as CornerSquareType
    },
    cornersDotOptions: {
      color: outerCornerColor.value,
      type: selectedOuterCornerTypes.value.code as CornerDotType
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: imageMargin.value,
      hideBackgroundDots: hideBackgroundDots.value,
      imageSize: imageSize.value
    }
  }
}

const canvas = ref()

const previewStyling = ref<QRCodeStyling>()

onMounted(() => {
  console.log(`%c
                      /^--^\     /^--^\     /^--^\
                      \____/     \____/     \____/
                     /      \   /      \   /      \
                    |        | |        | |        |
                     \__  __/   \__  __/   \__  __/
|^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
| | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
| | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
| | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
#########################################################################
| | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
`, `font-family: monospace`)
  console.log("Whatcha looking for here?")
  console.log("There are just a few cats lurking around. But other than that you will probably only find a few unnessecary log-lines.")
  console.log("This service runs as a client-side SPA built with NuxtJS. It does not send **any** data to anywhere at all.")
  console.log("Have fun!")
  console.log(`%c
           ▗▄▄▗▄▄▖ ▗▄▖ ▗▄▄▗▖  ▗▖  ▗▗▄▄▄▗▄▄▄▗▄▄▄▖▗▄▖ 
          ▐▌  ▐▌ ▐▐▌ ▐▐▌  ▐▌  ▐▛▚▞▜▐▌  ▐▌  █ █ ▐▌ ▐▌
           ▝▀▚▐▛▀▘▐▛▀▜▐▌▝▜▐▌  ▐▌  ▐▐▛▀▀▐▌  █ █ ▐▛▀▜▌
          ▗▄▄▞▐▌  ▐▌ ▐▝▚▄▞▐▙▄▄▐▌  ▐▐▙▄▄▐▙▄▄▗▄█▄▐▌ ▐▌                       
  `, `font-family: monospace`)
  console.log(generateStyling())
  previewStyling.value = new QRCodeStyling(generateStyling())
  previewStyling.value.append(canvas.value)
})

watch([qrCodeData, backgroundColor, backgroundTransparent, selectedDotTypes, selectedInnerCornerTypes, selectedOuterCornerTypes, dotColor, innerCornerColor, outerCornerColor, logo, hideBackgroundDots, imageMargin, imageSize], () => {
  previewStyling.value?.update(generateStyling())
}, { deep: true })

const downloadPreview = () => {
  const newPreview = new QRCodeStyling(generateStyling())
  newPreview.download({ extension: 'png' })
}

const sanitizeString = (url: string) => {
  var tempString = url.replaceAll('/', '-')
  tempString = tempString.replaceAll(":", "")
  tempString = tempString.replaceAll(".", "_")
  return tempString
}

const downloadSet = async () => {
  console.log("Starting to batch process QR-Codes")
  const zip = new JSZip();
  if (selectedExportTypes.value.length == 0) {
    window.alert("Please select one or more export types before pressing the download button.")
    return
  }
  for (const index in qrCodeData.value) {
    const data = qrCodeData.value[index]
    console.log(`Starting to encode ${data}`)

    var style = generateStyling()
    style.data = data
    console.log("Generated Styling:")
    console.log(style)
    const qrCode = new QRCodeStyling(style)
    for (const flIndex in selectedExportTypes.value) {
      const flType = selectedExportTypes.value[flIndex].code
      console.log(`Creating QR-Code for the file-type: ${flType}`)
      zip.file(`${sanitizeString(data)}.${flType}`, await qrCode.getRawData(flType))
    }
  }

  const zipData = await zip.generateAsync({ type: "blob", streamFiles: true })
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(zipData);
  link.download = `qrcodes.zip`
  link.click();
}

</script>

<style>
@reference "@/assets/css/main.css";

h1 {
  @apply text-xl md:text-2xl font-black
}

h2 {
  @apply text-lg md:text-xl font-medium
}

section {
  @apply bg-surface-0 p-5 rounded-2xl space-y-4
}

.stuff {
  svg{
    @apply  w-full h-full md:w-96 md:h-96;
  }
}
</style>
