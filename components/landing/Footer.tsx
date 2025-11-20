import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-xs font-bold text-white">
                            Y
                        </div>
                        <span className="font-display font-bold text-white">YappText</span>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="https://github.com/arnabing/yapptext" className="hover:text-white transition-colors flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            GitHub
                        </Link>
                    </div>

                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} YappText. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
