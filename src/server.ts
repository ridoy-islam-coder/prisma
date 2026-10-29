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
    // এখানে prisma.movie.create এর বদলে prisma.user.create ব্যবহার করতে হবে
    const createUserWithWatchlist = await prisma.user.findUnique({
      where: { id: "d8e35109-4b7f-45c9-a9f6-6338bb8a5096" },
      include: { watchlist: true },
    });
    console.log("ইউজার সফলভাবে তৈরি হয়েছে:", createUserWithWatchlist);

    // সব ইউজার দেখতে চাইলে:
    // const allUsers = await prisma.user.findMany({
    //   include: { watchlist: true }, // ওয়াচলিস্টের মুভিগুলো সহ দেখতে চাইলে
    // });
    // console.log("সব ইউজারের লিস্ট:", allUsers);

  } catch (error) {
    console.error("ইউজার তৈরি করার সময় এরর হয়েছে:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();