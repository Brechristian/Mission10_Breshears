export type Bowler = {
  map(
    arg0: (b: any) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  bowlerID: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: number;
  bowlerPhoneNumber: string;
  teamName: string;
};
