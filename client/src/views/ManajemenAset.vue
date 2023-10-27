<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: 'SideBar',
  computed: {
    ...mapState(useCounterStore, ['dataSideBar', 'authData', 'authTopMenu', 'masterAset']),
  },

  methods: {

    ...mapActions(useCounterStore, ['handleData', 'handleMenu', 'handleTopMenu', 'handleAset', 'handleChangeStatus']),

    changeStatus(id, value) {
      this.handleChangeStatus(id, value);
    },

    getIconClass(menuName) {
      switch (menuName) {
        case "Report Cuti":
          return "fa fa-moon-o";
        case "Foto Profile":
          return "fa fa-camera-retro";
        case "Ubah Password":
          return "fa fa-key";
        case "Logout":
          return "fa fa-sign-out";
        default:
          return "";
      }
    }
  },

  async created() {
    await this.handleData();
    await this.handleMenu();
    await this.handleTopMenu();
    await this.handleAset();
  },

};

</script>

<template>
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a href="https://ms.marvis.id/mysdm/media.php?module=home" class="site_title"><i class="fa fa-line-chart"></i>
              <span>MS</span></a>
          </div>

          <div class="clearfix"></div>

          <!-- menu profile quick info -->
          <div class="profile clearfix">
            <div class="profile_pic">
              <img src="../assets/profile-default.png" alt="..." class="img-circle profile_img">
            </div>
            <div class="profile_info" v-for="data in authData" :key="data.karyawanId">
              <h2>{{ data.nama_karyawan }}</h2>
              <p>{{ data.nama_jabatan }}</p>
            </div>
          </div>
          <!-- /menu profile quick info -->

          <br />

          <!-- sidebar menu -->
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
              <ul class="nav side-menu">
                <li v-for="menu in dataSideBar" :key="menu.id">
                  <a>
                    <i :class="'fa ' + menu.gamabr"></i>{{ menu.judul }}
                    <span class="fa fa-chevron-down"></span>
                  </a>
                  <ul class="nav child_menu" v-if="menu.children">
                    <li v-for="submenu in menu.children" :key="submenu.title">
                      <a :href="submenu.url">{{ submenu.judul }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- /sidebar menu -->
        </div>
      </div>

      <!-- top navigation -->
      <div class="top_nav">
        <div class="nav_menu">
          <div class="nav toggle">
            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
          </div>
          <nav class="nav navbar-nav">
            <ul class=" navbar-right">
              <li class="nav-item dropdown open" style="padding-left: 15px;">
                <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown"
                  data-toggle="dropdown" aria-expanded="false">
                  <img src="../assets/profile-default.png" alt="">
                </a>
                <div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                  <a v-for="menu in authTopMenu" :key="menu.id_topmenu" class="dropdown-item" :href="menu.link_url">
                    <span :class="getIconClass(menu.nama_topmenu)" class="pull-right"></span>
                    <span>{{ menu.nama_topmenu }}</span>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- /top navigation -->

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /page content -->

      <footer>
        <div class="pull-right">
          MS
        </div>
        <div class="clearfix"></div>
      </footer>
    </div>
  </div>
</template>
