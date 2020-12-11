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
        <tr>Cara
          <td>555-555-5555</td>
          <td>cara@gmail.com</td>
          <td>Provo House</td>
          <td>500</td>
          <td>June 2020</td>
          <td>June 2021</td>
        </tr>
        <tr>Hailey
          <td>123-456-7891</td>
          <td>Hailey@gmail.com</td>
          <td>Provo House</td>
          <td>500</td>
          <td>June 2020</td>
          <td>June 2021</td>
        </tr>

        
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
  name: "AllTenants",
  data() {
    return {
      name: "p",
      phone: "",
      tenant: {},
      tenantInfoArray: []
    };
  },
  // async created() {
  //   axios.get(`http://localhost:3000/AllTenants`).then(response => {
  //       this.tenantInfoArray=response.data
  //   })
  // },

};
</script>