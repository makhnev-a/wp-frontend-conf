import {instance} from "./instance";

export const api = {
  nas: {
    getOneNasRow(nasid) {
      return instance.get(`nas/${nasid}`);
    }
  },
  wifibox: {
    getUsersActivity(nasid, dateStart, dateEnd) {
      return instance.get(`wifibox/users/${nasid}/${dateStart}/${dateEnd}`);
    },
    getAuthActivity(nasid, dateStart, dateEnd) {
      return instance.get(`wifibox/statistics_auth_method_line/${nasid}/${dateStart}/${dateEnd}`);
    },
    getMonitoring(dateStart, dateEnd) {
      return instance.get(`wifibox/monitoring/${dateStart}/${dateEnd}`);
    },
    // getSpotsConnected(dogid: number, nasid: number, dateStart: string, dateEnd: string) {
    //     return instance.get(`wifibox/statistics/${dogid}/${nasid}/${dateStart}/${dateEnd}`);
    // },
    getSpotsTable(dogid) {
      return instance.get(`wifibox/nas/paginate/${dogid}`);
    }
  },
  yandex: {
    getAgeData(nasid, dateStart, dateEnd) {
      return instance.get(`yandex_metrica/statistics_visitors_doughnut/${nasid}/${dateStart}/${dateEnd}`);
    },
    getGenderDoughnut(nasid, dateStart, dateEnd) {
      return instance.get(`yandex_metrica/statistics_gender_doughnut/${nasid}/${dateStart}/${dateEnd}`);
    },
    getOsDoughnut(nasid, dateStart, dateEnd) {
      return instance.get(`yandex_metrica/statistics_os_doughnut/${nasid}/${dateStart}/${dateEnd}`);
    },
    getCountryDoughnut(nasid, dateStart, dateEnd) {
      return instance.get(`yandex_metrica/statistics_languages_doughnut/${nasid}/${dateStart}/${dateEnd}`);
    },
    getVisitors(nasid, dateStart, dateEnd) {
      return instance.get(`yandex_metrica/statistics_visitors_line/${nasid}/${dateStart}/${dateEnd}`);
    },
    getWorkLoad(nasid, dateStart, dateEnd) {
      return instance.get(`yandex_metrica/statistics_workload_bar/${nasid}/${dateStart}/${dateEnd}`);
    },
    getGenderBar(nasid, dateStart, dateEnd) {
      return instance.get(`yandex_metrica/statistics_gender_bar/${nasid}/${dateStart}/${dateEnd}`);
    }
  }
};