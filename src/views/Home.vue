<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <SideBare />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <v-text-field
              density="compact"
              placeholder="Search restaurant, Food, Cuisine or a Dish"
              append-inner-icon="mdi-magnify"
              variant="outlined"
              rounded
              class="text-grey mx-8"
            ></v-text-field>
            <v-toolbar color="transparent" class="pr-1 mt-n7">
              <v-toolbar-title class="text-white">Categories</v-toolbar-title>

              <v-spacer></v-spacer>
              <span class="text-caption text-white">View all</span>
              <v-btn
                density="compact"
                icon="mdi mdi-chevron-right-box"
                color="grey"
              ></v-btn>
            </v-toolbar>
            <h6 class="text-white ml-4 mt-n4">
              <span class="text-red">10+ new </span> Categories added this week
            </h6>

            <div class="d-flex justify-space-evenly mt-4" color="transparent">
              <v-avatar
                color="#605850"
                size="70"
                v-for="(food, i) in foods"
                :key="i"
              >
                <v-img :src="food.image" height="50"></v-img>
              </v-avatar>
            </div>
            <v-toolbar color="transparent" class="pr-1 mt-n2">
              <v-toolbar-title class="text-white"
                >Popular Dishes</v-toolbar-title
              >

              <v-spacer></v-spacer>
              <span class="text-caption text-white">View More</span>
              <v-btn
                density="compact"
                icon="mdi mdi-chevron-right-box"
                color="grey"
              ></v-btn>
            </v-toolbar>
            <h6 class="text-white ml-4 mt-n4">
              <span class="text-red">20+ new </span> dishes added this week
            </h6>
            <div class="d-flex justify-space-evenly mt-4" color="transparent">
              <v-card color="transparent" v-for="(dishe, i) in dishes" :key="i">
                <v-img height="70" :src="dishe.image" class="imag"></v-img>
                <v-card class="mt-n10" width="160" color="#303030">
                  <v-card-item class="text-center">
                    <v-card-title class="mt-10">{{ dishe.name }}</v-card-title>

                    <v-card-subtitle>
                      <span class="me-1">Starting From</span>
                    </v-card-subtitle>
                    <v-card-title>{{ dishe.money }}</v-card-title>
                  </v-card-item>

                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-icon
                        color="yellow"
                        icon="mdi mdi-star"
                        size="small"
                      ></v-icon>
                      <div class="text-grey ms-4">
                        <h6>{{ dishe.star }}</h6>
                      </div>
                      <v-spacer></v-spacer>
                      <div class="text-grey ms-4">
                        1360
                        <h5>Total Sale</h5>
                      </div>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-card>
            </div>
            <v-toolbar color="transparent" class="pr-1 mt-n2">
              <v-toolbar-title class="text-white"
                >Order Reports</v-toolbar-title
              >

              <v-spacer></v-spacer>
              <span class="text-caption text-white">View all</span>
              <v-btn
                density="compact"
                icon="mdi mdi-chevron-right-box"
                color="grey"
              ></v-btn>
            </v-toolbar>
            <h6 class="text-white ml-4 mt-n4">
              <span class="text-red">Wow 100+ new </span> Order got this week
            </h6>
            <v-card class="rounded-xl ma-2 pa-1" color="#424343">
              <v-row>
                <v-col cols="12" sm="1"> </v-col>
                <v-col cols="12" sm="2" class="text-center"
                  ><span class="text-caption">Customer</span></v-col
                >
                <v-col cols="12" sm="2" class="text-center"
                  ><span class="text-caption">Order number</span></v-col
                >
                <v-col cols="12" sm="2" class="text-center"
                  ><span class="text-caption">address</span></v-col
                >
                <v-col cols="12" sm="2" class="text-center"
                  ><span class="text-caption">Amount</span></v-col
                >
                <v-col cols="12" sm="2" class="text-center"
                  ><span class="text-caption">Status</span></v-col
                >
                <v-col cols="12" sm="1" class="text-center"></v-col>
              </v-row>
            </v-card>
            <v-row>
              <v-col cols="12" sm="3" class=""
                ><v-avatar> <v-img src="20.jpg" alt="John"></v-img> </v-avatar
                ><span class="text-caption text-white ml-1"
                  >Jamsed Jhon</span
                ></v-col
              >
              <v-col cols="12" sm="2" class="text-center mt-2"
                ><span class="text-caption text-white">0123595874</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center mt-2"
                ><span class="text-caption text-white"
                  >Karking Teagha</span
                ></v-col
              >
              <v-col cols="12" sm="2" class="text-center mt-2"
                ><span class="text-caption text-white">$120.45</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center">
                <v-chip variant="flat" color="green"> Completed </v-chip></v-col
              >
              <v-col cols="12" sm="1" class="text-center"></v-col>
            </v-row>
            <v-row class="mt-n5">
              <v-col cols="12" sm="3" class=""
                ><v-avatar> <v-img src="30.jpg" alt="John"></v-img> </v-avatar
                ><span class="text-caption text-white ml-1"
                  >Peter Poker</span
                ></v-col
              >
              <v-col cols="12" sm="2" class="text-center mt-2"
                ><span class="text-caption text-white">36258475</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center mt-2"
                ><span class="text-caption text-white"
                  >City 1 november</span
                ></v-col
              >
              <v-col cols="12" sm="2" class="text-center mt-2"
                ><span class="text-caption text-white">$140.45</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center">
                <v-chip variant="flat" color="orange"> Pending </v-chip></v-col
              >
              <v-col cols="12" sm="1" class="text-center"></v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card color="#4E4E4E" height="655" class="rounded-xl">
              <v-card
                class="mx-2 mt-4 rounded-lg"
                max-width="344"
                color="#6D6D6D"
              >
                <v-card-item title="DELIVERY ADDRESS">
                  <template v-slot:subtitle>
                    <v-icon
                      icon="mdi mdi-map-marker"
                      size="18"
                      class="me-1 pb-1"
                    ></v-icon>

                    Po.1478, Street No. 52 West New York
                  </template>
                </v-card-item>
                <v-card-text class="mt-n3">
                  <v-icon
                    size="16"
                    icon="mdi mdi-clock-outline"
                    class="mr-2"
                  ></v-icon
                  >20 min</v-card-text
                >
              </v-card>
              <v-toolbar color="transparent" class="pr-1 mt-n2">
                <v-btn icon class="hidden-xs-only">
                  <v-icon>mdi mdi-cart</v-icon>
                </v-btn>

                <v-toolbar-title>Cart</v-toolbar-title>

                <v-spacer></v-spacer>
                <span class="text-caption">Order ID: #1099</span>
              </v-toolbar>
              <v-card class="rounded-xl ma-2 pa-1 mt-n2" variant="outlined">
                <v-chip variant="flat" color="red"> Delivery </v-chip>
                <v-chip variant="text" class="ml-5"> Dine in </v-chip>
                <v-chip variant="text" color="red"> | </v-chip>
                <v-chip variant="text"> Takeaway </v-chip>
              </v-card>
              <v-card
                class="ma-2 mt-n2"
                title="Pepperoni Pizza"
                subtitle="Thin Crust"
                color="transparent"
                flat
              >
                <template v-slot:prepend>
                  <v-avatar color="">
                    <v-img src="1.webp" alt="John"></v-img>
                  </v-avatar>
                </template>
                <template v-slot:append>
                  <v-btn
                    density="compact"
                    icon="mdi mdi-circle-edit-outline"
                    x-small
                  ></v-btn>
                </template>
                <v-card-text class="ml-14 mt-n2">
                  <v-icon class="mr-2" x-small
                    >mdi mdi-plus-circle-outline</v-icon
                  >2
                  <v-icon class="ml-1" x-small
                    >mdi mdi-minus-circle-outline</v-icon
                  ></v-card-text
                >
              </v-card>
              <v-divider inset class="mt-n2"></v-divider>
              <v-card
                class="ma-2 mt-n2"
                title="Cheese Burger"
                subtitle="Whole wheat bun"
                color="transparent"
                flat
              >
                <template v-slot:prepend>
                  <v-avatar color="">
                    <v-img src="2.png" alt="John"></v-img>
                  </v-avatar>
                </template>
                <template v-slot:append>
                  <v-btn
                    density="compact"
                    icon="mdi mdi-circle-edit-outline"
                    x-small
                  ></v-btn>
                </template>
                <v-card-text class="ml-14 mt-n2">
                  <v-icon class="mr-2" x-small
                    >mdi mdi-plus-circle-outline</v-icon
                  >2
                  <v-icon class="ml-1" x-small
                    >mdi mdi-minus-circle-outline</v-icon
                  ></v-card-text
                >
              </v-card>

              <v-card
                class="rounded-xl ma-2 pa-1 mt-n2"
                variant=""
                elevation="16"
              >
                <v-chip variant="text" class="mRight"> Promotion Code </v-chip>

                <v-chip variant="flat" color="black"> TRYNEW </v-chip>
              </v-card>
              <v-card color="transparent" class="ma-2" flat>
                <v-list density="comfortable" class="text-white">
                  <v-list-item title="Sub Total">
                    <template v-slot:append>
                      <v-btn variant="text">$155.20</v-btn>
                    </template>
                  </v-list-item>

                  <v-list-item title="Delivery Charge">
                    <template v-slot:append>
                      <v-btn variant="text">$10</v-btn>
                    </template>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item title="TOTAL">
                    <template v-slot:append>
                      <v-btn variant="text">$165.20</v-btn>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card>
              <v-chip variant="flat" color="black" class="px-10 mLeft">
                Confirm Order
              </v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBare from "@/components/SideBar.vue";
const foods = [
  { image: "2.png" },
  { image: "3.png" },
  { image: "4.png" },
  { image: "5.png" },
  { image: "6.png" },
  { image: "7.png" },
  { image: "8.png" },
];
const dishes = [
  { image: "11.png", name: "Hamburger", money: "$10.00", star: "4.5" },
  { image: "22.png", name: "Pizza", money: "$25.00", star: "4.1" },
  { image: "33.png", name: "Sushi", money: "$15.00", star: "4.3" },
  { image: "44.png", name: "Gratin", money: "$23.00", star: "4.9" },
];
</script>
<script>
export default {
  data: () => ({}),
};
</script>
<style scoped>
.mRight {
  margin-right: 100px;
}
.v-list {
  background: transparent !important;
}
.mLeft {
  margin-left: 90px;
}
.imag {
  z-index: 9999 !important;
}
</style>
