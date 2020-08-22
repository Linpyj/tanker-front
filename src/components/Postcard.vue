<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="7">
                <v-card>
                    <v-card-title></v-card-title>
                    <v-card-text class="headline font-weight-bold">
                        {{ item.content }}
                    </v-card-text>
                    <div class="has-text-centered">
                        <p>{{ item.created_at }}</p>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['item']
}

</script>