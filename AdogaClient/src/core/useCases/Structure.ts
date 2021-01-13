export default interface Repository {
  Get(): Promise<any[]>;
}
