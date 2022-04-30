<template>
  <v-app id="inspire">
    <v-app-bar app color="white" elevate-on-scroll elevation="4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-col lg="6" cols="12">
        <v-form class="mt-5">
          <v-text-field 
          rounded 
          outlined 
          dense 
          placeholder="Recherchez ici"
          append-icon="mdi-magnify" />
        </v-form>
      </v-col>
      <v-spacer/>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-img src="img/mount.webp" class="pa-4">
        <div class="text-center">
          <v-avatar class="mb-4" color="grey darken-1" size="64">
            <v-img aspect-ratio="30" src="img/esb.jpg" />
          </v-avatar>
          <h2 class="white--text">Espoir Baraka</h2>
        </div>
      </v-img>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item :key="n">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-home", "Dashboard"],
      ["mdi-office-building", "Entreprise"],
      ["mdi-radio", "Radio"],
      ["mdi-cog-stop", "Parametres"],
    ],
  }),
};
</script>