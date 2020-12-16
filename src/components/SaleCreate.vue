<template>
    <div>
        <div class="card mt-3 mt-lg-0">
            <div class="card-header">
                <h5 class="card-title mb-0">New Sale</h5>
            </div>
            <div class="card-body">
                <div v-if="errorMessage" class="alert alert-danger">
                    <p class="mb-0">{{errorMessage}}</p>
                </div>
                <form id="purchase-form" @submit.prevent="submitPurchase">
                    <div class="form-group">
                        <label for="amount">Amount (Grams)</label>
                        <input v-model="amount" value="1" type="number" name="amount" id="amount" class="form-control">
                    </div>
                    <div class="form-group mb-0">
                        <input type="submit" value="Make Purchase" class="btn btn-success">
                        <button v-on:click="cancelPurchase" class="btn btn-outline-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            amount: null,
            errorMessage: null
        }
    },
    methods: {
        submitPurchase() {
            if (!this.amount) {
                this.errorMessage = 'The "amount" field is required!';
                return;
            }
            if (this.amount < 1 || this.amount > 28) {
                this.errorMessage = 'You must select an amount between 1 and 28 grams.';
                return;
            }

            const purchase = {
                amount: parseInt(this.amount),
                shelfStrainId: this.shelfStrainId
            };
            console.log(purchase);

            const token = this.$store.state.token;
            axios.post('/purchases', purchase, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                this.$router.replace('/account');
            })
            .catch(err => {
                console.log(err.response);
                this.errorMessage = "Unable to create purchase. Try again?";
            });
        },
        cancelPurchase() {
            this.$router.go(-1);
        }
    },
    props: ['shelfStrainId']
}
</script>

<style scoped>

</style>