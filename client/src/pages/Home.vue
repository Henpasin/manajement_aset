<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {

  computed: {
    ...mapState(useCounterStore, ['masterAset']),
  },

  methods: {
    ...mapActions(useCounterStore, ['handleChangeStatus']),

    changeStatus(id, value) {
      this.handleChangeStatus(id, value);
    },
  },

};
</script>

<template>
  <!-- page content -->
  <div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3>Manajemen Aset</h3>
        </div>
      </div>
      <div class="x_panel">
        <div class="row">
          <div class="col-sm-12">
            <div>
              <button type="button" class="btn btn-info btn-sm">Tambah Baru</button>
              <hr>
            </div>
            <div class="card-box table-responsive">
              <table id="datatable" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Aset</th>
                    <th>Merek</th>
                    <th>SN</th>
                    <th>Lokasi</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(aset, index) in masterAset" :key="aset.idbarang">
                    <td>{{ index + 1 }}</td>
                    <td>{{ aset.nama_barang }}</td>
                    <td>{{ aset.merek?.nama_merek || '-' }}</td>
                    <td>{{ aset.sn }}</td>
                    <td>{{ aset.lokasi || 'Lantai 3' }}</td> <!-- asumsi Anda punya field lokasi dalam data aset -->
                    <td>{{ aset.status ? 'Aktif' : 'Tidak Aktif' }}</td>
                    <td>
                      <button type="button" class="btn btn-info btn-sm">Detail</button>
                      <button type="button" :class="aset.status ? 'btn btn-danger' : 'btn btn-primary'" class="btn-sm"
                        @click.prevent="changeStatus(aset.idbarang, aset.status ? false : true)">{{ aset.status ? 'Non Aktif' : 'Aktif' }}</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>