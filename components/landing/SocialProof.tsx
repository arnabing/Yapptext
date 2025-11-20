import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Journalist",
        content: "YappText saved me hours of transcribing interviews. The speaker detection is surprisingly accurate!",
        avatar: "SJ"
    },
    {
        name: "Marcus Chen",
        role: "PhD Student",
        content: "Used this for my thesis interviews. The privacy focus is a huge plus for sensitive data.",
        avatar: "MC"
    },
    {
        name: "Alex Morgan",
        role: "Podcaster",
        content: "The fastest way to get show notes. I just drag my episode in and it's done in minutes.",
        avatar: "AM"
    },
    {
        name: "Elara Vance",
        role: "Content Creator",
        content: "I use it to repurpose my YouTube videos into blog posts. Absolute game changer.",
        avatar: "EV"
    },
    {
        name: "Julian Thorne",
        role: "UX Researcher",
        content: "Great for user testing sessions. The timestamps help me jump exactly to the feedback points.",
        avatar: "JT"
    },
    {
        name: "David Kim",
        role: "Legal Assistant",
        content: "Handles legal depositions surprisingly well. The formatting makes it easy to read.",
        avatar: "DK"
    }
];

export function SocialProof() {
    return (
        <section className="py-24 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 font-display">Loved by Creators</h2>
                    <p className="text-gray-400">Join thousands of users saving time with YappText</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar>
                                        <AvatarFallback className="bg-red-600 text-white">{t.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-white">{t.name}</p>
                                        <p className="text-xs text-gray-400">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    "{t.content}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
