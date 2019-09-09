//  export interface Farmer {
//         id: number;
//         name: string;
//         document: number;
//         farmer: string;
//         address: string;
//     }


    export interface Farmer {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface ResponseFarmer {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: Farmer[];
    }




