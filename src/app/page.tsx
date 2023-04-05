// Step 02 fetching data server static

// const url = "https://api.quotable.io/random?tags=technology"

// async function getData() {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error("Failed to fetch");
//   } else {
//     return res.json();
//   }
// }

// export default async function ApiStatic() {
//   const data = await getData();
//   return <div>
//     {data.content}
//   </div>;
// }





// Step 03 fetching data server dynamic

// const url = 'https://api.quotable.io/random?tags=technology';

// async function getData() {
//   const res = await fetch(url, { cache: "no-store" });
//   if (!res.ok) {
//     throw new Error("Failed to Fetch");
//   } else {
//     return res.json();
//   }
// }


// export default async function page() {
//   const data = await getData();
//   return <div>
//     {data.content}
//   </div>;
// }





// Step 04 Fetching data client

// "use client"

// import useSwr from "swr"

// const url = 'https://api.quotable.io/random?tags=technology';

// const fetcher = (url: any) => fetch(url).then((res) => res.json());

// export default function page() {
//   const { data, isLoading, error } = useSwr(url, fetcher)
//   if (error) return <div>Failed to fetch</div>
//   if (isLoading) return <div>loading....</div>
//   return <div>
//     {data.content}
//   </div>;
// }
