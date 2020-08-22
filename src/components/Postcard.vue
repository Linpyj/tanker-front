<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="7">
                <v-card>
                    <v-card-title></v-card-title>
                    <v-card-text class="headline font-weight-bold">
                        {{ item }}
                    </v-card-text>
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