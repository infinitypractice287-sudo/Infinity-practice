/* =====================================================================
   Practice with Infinity — PERMANENT Practice Sets manifest
   © Pradip Kar · Practice with Infinity

   YE FILE KA LINK/NAAM KABHI NAHI BADLEGA.
   index.html ka "Sabhi Practice Sets" page (#/sets) is list se render hota hai.

   >> NAYA UPLOAD KAISE ADD KAREIN:
      Neeche window.PRACTICE_SETS list mein bas ek nayi entry add kar do:

      {
        file:  "NAYA_FILE_KA_NAAM.html",     // repo root mein upload kiya hua file
        route: "#/chapter-basicmaths",       // (optional) file ke andar wala test-view
        badge: "🆕 Naya",                    // (optional) red badge title ke saath
        title: "Chapter Ka Naam — 250 Q Set",
        kicker:"NEET UG 2027 · Physics · Chapter 2",
        chips: ["250 Questions", "1000 Marks", "+4 / −1"],
        note:  "Short description Hinglish mein."
      },

      NOTE: Agar manifest update na bhi ho, #/sets page repo mein koi bhi naya
      .html file khud auto-detect kar leta hai (GitHub API se) — wo generic card
      ke saath list mein apne aap aa jata hai.
   ===================================================================== */

window.PRACTICE_SETS = [
  {
    internal: "#/chapter-basicmaths",
    title: "Basic Mathematics & Calculus — Original 100 Q Test",
    kicker: "NEET UG 2027 · Physics · Chapter 1",
    chips: ["100 Questions", "400 Marks", "+4 / −1", "27 Figures", "100 Min"],
    note: "Site ke andar embedded original interactive test — Chapter 1."
  },
  {
    file: "NEET_Basic_Math_Calculus_200_Revised.html",
    route: "#/chapter-basicmaths",
    badge: "🆕 Naya",
    title: "Basic Mathematics & Calculus — Revised 200 Q Set",
    kicker: "NEET UG 2027 · Physics · Chapter 1",
    chips: ["200 Questions", "800 Marks", "+4 / −1", "45 Figures", "200 Min"],
    note: "Chapter 1 ka expanded + revised question bank — naye tab mein khulta hai, dono tests ki progress alag save hoti hai."
  }
];
