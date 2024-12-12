export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // Duplicated ==============================================
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  // ===============================================

  // Tidak efektif karena setiap nanti ada class baru maka type definition akan terus bertambah ========================
  // addMarker(map: User | Company): void {
  //   // ga bsa karena gada di keduanya
  //   // map.name;

  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: map.location.lat,
  //       lng: map.location.lng,
  //     },
  //   });
  // }
  // ======================================

  addMarker(map: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: map.location.lat,
        lng: map.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: map.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
