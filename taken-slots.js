/* ---------- Rebloom Taken Slots ----------
   After you CONFIRM a deposit for a booking, add a line here so that
   date + time can't be picked by anyone else on the booking form.

   Format: 'YYYY-MM-DD|Time exactly as it appears in the Preferred Time list'
   Example: a confirmed booking for Sunday Sept 21, 2026 at 10:00 AM:

   const TAKEN_SLOTS = [
     '2026-09-21|10:00 AM',
   ];

   Remove a line if that booking is cancelled and the slot opens back up.
   This does NOT sync automatically with email or bank transfers — it only
   reflects what you type in here, so update it as soon as a deposit clears. */
const TAKEN_SLOTS = [
  // '2026-09-21|10:00 AM',
];
