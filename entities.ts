export interface Location {
  locationId: number;
  locationName: string;
  locationAddress: string;
  locationLatLng: number[];
  manager?: Manager;
  region?: any;
  employees?: Employee[];
}

export interface Employee {
  employeeId: string;
  employeeName: string;
  employeeLastName: string;
  employeePhoneNumber: string;
  employeeEmail: string;
  emplyeePhoto?: string;
  location?: Location;
  user?: any;
}

export interface Manager {
  managerId: string;
  managerFullName: string;
  managerSalary: number;
  managerEmail: string;
  managerPhoneNumber: string;
  location: Location;
  user: any;
}
