<template>
  <MainLayout>
    <template #content>
      <div class="global-padding">
        <div class="">
          <img class="fixed w-[645px] ml-[5%]" :src="selectedData.image_url" alt="" />
          <div class="flex flex-col justify-center ml-auto w-1/2">
            <div class="ml-[20%]">
              <div class="mt-[100px] text-[40px] text-[SukhumvitSet-Bold] font-bold">ซื้อ iPhone</div>
              <div class="w-full">
                <p class="text-[24px] text-[SukhumvitSet-Bold] font-bold pt-[56px]">รุ่น</p>
                <div v-for="items in productDetail" :key="items">
                  <div @click="selectedModel(items.name)" class="flex h-[120px] mt-[16px] flex p-[24px] border border-[#DDDDDD] rounded-[8px] items-center justify-between cursor-pointer hover:border-[#5BBA47]" :style="`${selectedData.name == items.name ? `border-color:#5BBA47` : ''}`">
                    <button class="text-[20px] text-[SukhumvitSet-Bold]">{{ items.name }}</button>
                    <div class="text-[18px]">${{ items.model[0].price.formatToCurrency() }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ml-[20%]">
              <p class="text-[24px] text-[SukhumvitSet-Bold] font-bold pt-[56px]">สี</p>
              <div class="grid gap-[25px] grid-cols-2 cursor-pointer">
                <div v-for="items in colorModel" :key="items" @click="selectedColor(items)" class="mt-[16px] flex justify-center p-[24px] border border-[#DDDDDD] rounded-[8px] hover:border-[#5BBA47]" :style="`${selectedData.color == items.color ? `border-color:#5BBA47` : ''}`">
                  <div class="flex flex-col items-center">
                    <div class="w-[30px] h-[30px] rounded-full" :style="`background-color:#${items.color_hex};`"></div>
                    <div class="w-full h-[30px] justify-center flex pt-[15px]">{{ items.color }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ml-[20%]">
              <p class="text-[24px] text-[SukhumvitSet-Bold] font-bold pt-[56px]">ขนาด</p>
              <div class="grid gap-[25px] grid-cols-2 cursor-pointer">
                <div v-for="items in sizeModel" :key="items" @click="selectedSize(items)" class="mt-[16px] flex justify-center p-[24px] border border-[#DDDDDD] rounded-[8px] hover:border-[#5BBA47]" :style="`${selectedData.size == items.size ? `border-color:#5BBA47` : ''}`">
                  <div class="flex flex-col items-center">
                    <div class="text-[32px] text-[SukhumvitSet-Bold] font-bold">{{ items.size }}</div>
                    <div class="text-[16px] text-[#808080]">฿{{ items.price.formatToCurrency() }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ml-[20%]">
              <div class="w-full">
                <p class="text-[24px] text-[SukhumvitSet-Bold] font-bold pt-[56px]">คุณต้องการจัดส่งด้วยวิธีใด</p>
                <div v-bind="selectedData.deliveryType" @click="selectedDelivery(1)" :style="`${selectedData.deliveryType == 1 ? `border-color:#5BBA47` : ''}`" class="h-[120px] mt-[16px] flex p-[24px] border border-[#DDDDDD] rounded-[8px] items-center gap-[16px] cursor-pointer hover:border-[#5BBA47]">
                  <img :src="atStoreIcon" alt="" />
                  <div class="flex flex-col">
                    <div class="text-[20px] text-[SukhumvitSet-Bold] font-bold">บริการรับสินค้าหน้าร้าน</div>
                    <div class="text-[16px] text-[#808080]">จองเริ่มต้นเพียง ฿3,000 เท่านั้น</div>
                  </div>
                </div>
                <div v-bind="selectedData.deliveryType" @click="selectedDelivery(2)" :style="`${selectedData.deliveryType == 2 ? `border-color:#5BBA47` : ''}`" class="h-[120px] mt-[16px] flex p-[24px] border border-[#DDDDDD] rounded-[8px] items-center gap-[16px] cursor-pointer hover:border-[#5BBA47]">
                  <img :src="deliveryIcon" alt="" />
                  <div class="flex flex-col">
                    <div class="text-[20px] text-[SukhumvitSet-Bold] font-bold">บริการจัดส่งถึงบ้าน</div>
                    <div class="text-[16px] text-[#808080]">ชำระสินค้าในราคาเต็ม</div>
                  </div>
                </div>
              </div>
            </div>

            <span class="mt-[40px] mb-[40px] border border-[#DDDDDD] ml-[20%]"></span>
            <button @click="handleSubmit(productDetail)" :disabled="!validateForm" class="bg-[#5BBA47] ml-[20%] mb-[20%] text-[20px] text-[#FFFFFF] py-[12px] rounded-[8px] cursor-pointer" :style="`${!validateForm ? 'background-color:#DDDDDD' : 'background-color:#5BBA47'}`">ยืนยันการสั่งซื้อล่วงหน้า</button>
          </div>
        </div>
        <van-popup class="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px]" :overlay="true" v-model:show="show">
          <div class="flex flex-col items-center bg-white border rounded-[8px] py-[100px] px-[150px]">
            <img @click="" :src="orderSucess" alt="" />
            <p class="text-[24px] text-[SukhumvitSet-Bold] font-bold pt-[24px]">การสั่งซื้อล่วงหน้าสำเร็จ</p>
            <p class="text-[18px]">การชำระเงินของคุณสำเร็จแล้ว!</p>
            <p class="text-[18px]">ตอนนี้เราจะส่งอีเมลยืนยันคำสั่งซื้อสำเร็จให้คุณ</p>
            <button @click="closePopup()" class="bg-[#5BBA47] text-[20px] text-[#FFFFFF] py-[12px] rounded-[8px] cursor-pointer w-[310px] mt-[64px]">ยืนยัน</button>
          </div>
        </van-popup>
      </div>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
  import { baseService } from '../services/api'
  import { onBeforeMount, reactive, ref, computed } from 'vue'
  import { ProductDetail, newDataDetail, sizeDetail, colorDetail } from '../constant/models/interfaces/ProductModel'
  import atStoreIcon from '../assets/icon/at-store.svg'
  import deliveryIcon from '../assets/icon/delivery.svg'
  import orderSucess from '../assets/images/order-success.png'
  const show = ref<boolean>(false)
  const productDetail = reactive<ProductDetail[]>([])
  const colorModel = ref<colorDetail[]>([])
  const sizeModel = ref<sizeDetail[]>([])
  const selectedData = ref<newDataDetail>({
    name: 'iPhone 13 mini',
    color: 'Pink',
    image_url: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842710000',
    size: '256GB',
    deliveryType: 0,
  })

  const fecthProductModel = (): void => {
    baseService
      .getJSON('api/pre-order')
      .then((resp) => {
        if (resp.status == 200) {
          const tempProductDetail = resp.data.data.main_product.map((o: any) => ({
            name: o.name,
            model: o.model
              .map((j: any) => j.data)
              .flat()
              .sort((a: any, b: any) => b.price - a.price),
          }))
          productDetail.splice(0, productDetail.length, ...tempProductDetail)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const selectedModel = (selectedItemName: any) => {
    const newData = productDetail.find((item) => item.model.find((i) => i.model_name === selectedItemName))

    if (newData) {
      const mapAndRemoveDuplicates = (data: any, keyFn: any) => {
        const uniqueItems = new Set()

        const mappedData = data.map(keyFn).filter((item: any) => {
          const key = JSON.stringify(item)
          if (!uniqueItems.has(key)) {
            uniqueItems.add(key)
            return true
          }
          return false
        })

        return mappedData
      }

      const tempColorModel = mapAndRemoveDuplicates(newData.model, (o) => ({
        color: o.color,
        color_hex: o.color_hex,
        image_url: o.image_url,
      }))

      const tempSizeModel = mapAndRemoveDuplicates(newData.model, (o) => ({
        size: o.size,
        price: o.price,
      }))

      sizeModel.value.splice(0, sizeModel.value.length, ...tempSizeModel)
      colorModel.value.splice(0, colorModel.value.length, ...tempColorModel)
    }

    selectedData.value.name = selectedItemName
  }
  const selectedColor = (item: any) => {
    selectedData.value.color = item.color
    selectedData.value.image_url = item.image_url
  }
  const selectedSize = (item: any) => {
    selectedData.value.size = item.size
  }
  const selectedDelivery = (item: any) => {
    selectedData.value.deliveryType = item
  }

  const validateForm = computed(() => {
    return selectedData
  })
  const closePopup = () => {
    show.value = false
  }
  const handleSubmit = (productDetail: any) => {
    const findId = productDetail.find((item: any) => item.model.find((o: any) => o.model_name === selectedData.value.name && o.color === selectedData.value.color && o.size === selectedData.value.size))
    const id = findId.model.map((id: any) => id.id)
    const payload = {
      id: id[0],
    }
    baseService
      .postJSON('api/pre-order', payload)
      .then((resp) => {
        if (resp.status == 200) {
          console.log(resp.data.message)
        }
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        show.value = true
      })
  }

  onBeforeMount(() => {
    fecthProductModel()
  })
</script>

<style></style>
