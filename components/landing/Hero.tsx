import { TranscriptionInterface } from "@/components/TranscriptionInterface";

export function Hero() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-500/5 to-transparent blur-3xl" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        Audio to Text in Seconds
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Simple, fast audio transcription with automatic speaker detection.
                        Drop your audio file and get instant transcripts.
                    </p>
                </div>

                {/* Floating Interface Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 rounded-2xl blur-xl opacity-50" />

                    {/* Glass Card */}
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
                        <div className="p-1 bg-white/5 border-b border-white/5 flex items-center gap-2 px-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                            <TranscriptionInterface />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
