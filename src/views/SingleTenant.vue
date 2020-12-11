<template>
  <div>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr >
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Phone
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            Property
          </th>
          <th class="text-left">
            Rent Amount
          </th>
          <th class="text-left">
            Contract Start
          </th>
          <th class="text-left">
            Contract End
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>This is the single tenant profile page!</tr>
        <!-- <tr
          v-for="tenant in tenantInfoArray"
          :key="tenant.first_name"
          @click="$router.push(`/SingleTenant/${tenant.tenant_id}`)"
        >
          <td>{{ tenant.full_name }}</td>
          <td>{{ tenant.phone }}</td>
          <td>{{ tenant.email_address }}</td>
          <td>{{ tenant.property_nickname }}</td>
          <td>{{ tenant.monthly_rent_amount }}</td>
          <td>{{ tenant.lease_start }}</td>
          <td>{{ tenant.lease_end }}</td>
        </tr> -->
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>
<script>
// import axios from 'axios';

export default {
  name: "SingleTenant",
  data() {
    return {
      name: "This is the single tenant profile page",
      phone: "",
      tenant: {},
    };
  },
  // async created() {
  //   axios.get(`http://localhost:3000/SingleTenant/${this.$route.params.id}`).then(response => {
  //       this.tenant=response.data
  //   })
  // },
};
</script>