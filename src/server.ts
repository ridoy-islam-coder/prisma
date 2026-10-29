// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   try {
//     // একসঙ্গে ৬ জন ইউজারের ডামি ডাটা তৈরি করা
//     const createManyUsers = await prisma.user.createMany({
//       data: [
//         {
//           name: "Rahim Ahmed",
//           email: "rahim.ahmed@example.com",
//           password: "password123",
//         },
//         {
//           name: "Karim Uddin",
//           email: "karim.uddin@example.com",
//           password: "password123",
//         },
//         {
//           name: "Nusrat Jahan",
//           email: "nusrat.jahan@example.com",
//           password: "password123",
//         },
//         {
//           name: "Tanvir Hossain",
//           email: "tanvir.hossain@example.com",
//           password: "password123",
//         },
//         {
//           name: "Sadia Sultana",
//           email: "sadia.sultana@example.com",
//           password: "password123",
//         },
//         {
//           name: "Imran Khan",
//           email: "imran.khan@example.com",
//           password: "password123",
//         },
//       ],
//       skipDuplicates: true, // যদি কোনো ইমেইল আগে থেকেই থাকে, তবে সেটি স্কিপ করবে (এরর দিবে না)
//     });

//     console.log("৬টি ডামি ইউজার সফলভাবে তৈরি হয়েছে:", createManyUsers);

//     // ডাটাবেজ থেকে সব ইউজার দেখতে চাইলে:
//     const allUsers = await prisma.user.findMany();
//     console.log("সব ইউজার লিস্ট:", allUsers);

//   } catch (error) {
//     console.error("ডামি ডাটা তৈরি করার সময় এরর হয়েছে:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // একসঙ্গে ৬টি মুভির ডামি ডাটা তৈরি করা
    const createManyMovies = await prisma.movie.createMany({
      data: [
        {
          title: "Inception",
          director: "Christopher Nolan",
          rating: "8.8",
          genre: "Sci-Fi",
        },
        {
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          rating: "9.3",
          genre: "Drama",
        },
        {
          title: "The Dark Knight",
          director: "Christopher Nolan",
          rating: "9.0",
          genre: "Action",
        },
        {
          title: "Interstellar",
          director: "Christopher Nolan",
          rating: "8.7",
          genre: "Sci-Fi",
        },
        {
          title: "Pulp Fiction",
          director: "Quentin Tarantino",
          rating: "8.9",
          genre: "Crime",
        },
        {
          title: "Titanic",
          director: "James Cameron",
          rating: "7.9",
          genre: "Romance",
        },
      ],
      skipDuplicates: true, // যদি কোনো ডুপ্লিকেট এন্ট্রি থাকে তবে স্কিপ করবে
    });

    console.log("৬টি ডামি মুভি সফলভাবে তৈরি হয়েছে:", createManyMovies);

    // ডাটাবেজ থেকে সব মুভি দেখতে চাইলে:
    const allMovies = await prisma.movie.findMany();
    console.log("সব মুভির লিস্ট:", allMovies);

  } catch (error) {
    console.error("মুভির ডামি ডাটা তৈরি করার সময় এরর হয়েছে:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();