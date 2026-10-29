import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // একসঙ্গে ৬ জন ইউজারের ডামি ডাটা তৈরি করা
    const createManyUsers = await prisma.user.createMany({
      data: [
        {
          name: "Rahim Ahmed",
          email: "rahim.ahmed@example.com",
          password: "password123",
        },
        {
          name: "Karim Uddin",
          email: "karim.uddin@example.com",
          password: "password123",
        },
        {
          name: "Nusrat Jahan",
          email: "nusrat.jahan@example.com",
          password: "password123",
        },
        {
          name: "Tanvir Hossain",
          email: "tanvir.hossain@example.com",
          password: "password123",
        },
        {
          name: "Sadia Sultana",
          email: "sadia.sultana@example.com",
          password: "password123",
        },
        {
          name: "Imran Khan",
          email: "imran.khan@example.com",
          password: "password123",
        },
      ],
      skipDuplicates: true, // যদি কোনো ইমেইল আগে থেকেই থাকে, তবে সেটি স্কিপ করবে (এরর দিবে না)
    });

    console.log("৬টি ডামি ইউজার সফলভাবে তৈরি হয়েছে:", createManyUsers);

    // ডাটাবেজ থেকে সব ইউজার দেখতে চাইলে:
    const allUsers = await prisma.user.findMany();
    console.log("সব ইউজার লিস্ট:", allUsers);

  } catch (error) {
    console.error("ডামি ডাটা তৈরি করার সময় এরর হয়েছে:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

