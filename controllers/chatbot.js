

const faqs = [
    {
        q: ["refund", "money back", "cancel refund"],
        a: "Travique is a listing platform (not direct booking). Refunds depend on the property owner or external booking service."
    },
    {
        q: ["cancel booking"],
        a: "Bookings are handled externally. Please check the cancellation policy provided by the listing owner or platform."
    },
    {
        q: ["privacy", "data", "secure", "safety"],
        a: "Travique keeps your data secure using standard encryption. We do not share your personal information without consent."
    },
    {
        q: ["data safe"],
        a: "Yes, your data is सुरक्षित and protected. We follow secure authentication and data handling practices."
    },
    {
        q: ["support", "help", "contact", "customer care"],
        a: "You can use the chatbot or contact us through the platform for any help related to listings or account issues."
    },
    {
        q: ["customer support"],
        a: "Travique support helps with platform-related issues like login, listings, and comments."
    },
    {
        q: ["booking"],
        a: "Travique helps you explore destinations. Booking is handled outside the platform based on listing details."
    },
    {
        q: ["payment"],
        a: "Travique does not handle payments directly. Payment depends on the external booking source mentioned in listings."
    },
    {
        q: ["payment failed"],
        a: "Since payments are external, please contact the respective booking service if your payment fails."
    },
    {
        q: ["review", "feedback", "rating"],
        a: "Users can leave reviews and ratings on listings to share their travel experience with others."
    },
    {
        q: ["rating"],
        a: "You can rate a place from 1 to 5 stars based on your experience visiting that destination."
    },
    {
        q: ["edit review"],
        a: "Currently, you may not be able to edit reviews. You can delete and re-add your review if needed."
    },
    {
        q: ["delete review"],
        a: "Only the owner of the review or listing owner may have permission to delete reviews (based on system rules)."
    },
    {
        q: ["comment", "add comment"],
        a: "Users can add comments on listings to share opinions, tips, or experiences about the destination."
    },
    {
        q: ["add comment"],
        a: "Open a listing and scroll to the comment section to add your comment."
    },
    {
        q: ["delete comment"],
        a: "Only the listing owner has permission to delete comments on their Travique listing."
    },
    {
        q: ["services"],
        a: "Travique allows users to explore destinations, add listings, view locations on map, and share reviews & ratings."
    },
    {
        q: ["account"],
        a: "You can manage your account, listings, and activity from your profile dashboard."
    },
    {
        q: ["login issue"],
        a: "If you face login issues, try resetting your password or check your credentials."
    },
    {
        q: ["reset password"],
        a: "Use the 'Forgot Password' option on the login page to reset your password."
    },
    {
        q: ["host"],
        a: "Any registered user can add a Travique (listing) and share travel destinations with others."
    },
    {
        q: ["list property"],
        a: "After login, you can add a Travique by providing details like location, images, and description."
    },
    {
        q: ["availability"],
        a: "Travique shows destination details. Availability depends on external booking services."
    },
    {
        q: ["location", "map", "google map"],
        a: "Each Travique listing includes Google Maps integration so users can view the exact location."
    },
    {
        q: ["edit listing", "update travique"],
        a: "Only the owner of the Travique listing can edit or update its details."
    },
    {
        q: ["delete listing"],
        a: "Only the owner of the Travique can delete their listing."
    },
    {
        q: ["search"],
        a: "You can search for destinations using keywords to find the best places for your vacation."
    }
];

module.exports.sendChat = async (req, res) => {
    try {
        const userMessage = req.body.message.toLowerCase();

        const match = faqs.find(faq =>
            faq.q.some(keyword => userMessage.includes(keyword))
        );

        if (match) {
            return res.json({ reply: match.a });
        }

        return res.json({
            reply: "Sorry, I couldn't understand that. You can ask about bookings, refunds, reviews, or support 😊"
        });

        //         const response = await client.chat.completions.create({
        //             model: "gpt-4.1-mini",
        //             messages: [
        //                 {
        //                     role: "system",
        //                     content: `
        // You are a chatbot for a Travique.

        // You must:
        // - Answer FAQs (privacy policy, refund, support)
        // - Help users with bookings, reviews, comments
        // - If question is outside context, still reply intelligently
        // - Keep answers short and helpful
        // `
        //                 },
        //                 {
        //                     role: "user",
        //                     content: userMessage
        //                 }
        //             ]
        //         });

        //         res.json({
        //             reply: response.choices[0].message.content
        //         });

    } catch (err) {
        console.log(err);

        console.log("ERROR:", err.message);
        console.log("FULL ERROR:", err);
        res.json({ reply: "AI service is temporarily unavailable. Please try later." });
    }
}