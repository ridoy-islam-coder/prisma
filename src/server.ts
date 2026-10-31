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

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   try {
//     // ১. সব ইউজার একসাথে ডিলিট করতে চাইলে (deleteMany ব্যবহার করতে হবে)
//     const deleteUsers = await prisma.movie.deleteMany({
//       // যদি আপনি নির্দিষ্ট কোনো শর্ত বা ফিল্টার ছাড়া সব ডিলিট করতে চান, 
//       // তবে where ক্লজ খালি বা বাদ দিতে পারেন (তবে অনেক প্রজেক্টে খালি where দেওয়া লাগে না)।
//       // যেমন: নির্দিষ্ট ইমেইলের ইউজার ডিলিট করতে চাইলে where ব্যবহার করা যায়।
//     });

//     console.log(`${deleteUsers.count} টি ইউজার সফলভাবে ডিলিট করা হয়েছে!`);

//     // ২. ডিলিট হওয়ার পর ইউজার লিস্ট চেক করতে চাইলে:
//     const remainingUsers = await prisma.user.findMany();
//     console.log("বাকি ইউজার লিস্ট:", remainingUsers);

//   } catch (error) {
//     console.error("ডাটা ডিলিট করার সময় এরর হয়েছে:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();