import AboutPage from "@/components/about/AboutPage";
import EducationPage from "@/components/about/EducationPage";
import ExperiencePage from "@/components/about/ExperiencePage";
import HomePage from "@/components/home/HomePage";
import Template from "@/components/Template";

function App() {
    return (
        <div
            className="h-screen overflow-y-scroll
                       snap-y snap-mandatory" // Add these classes
        >
            <Template style="bg-linear-to-b/oklch from-cyan-900 from-40% via-cyan-600 via-80% to-gray-100 text-gray-50">
                <HomePage buttonStyle="bg-linear-to-bl/oklch from-cyan-200 to-gray-100 text-cyan-600 p-4" />
            </Template>
            <Template style="bg-linear-to-b/oklch from-gray-100 to-gray-300 text-gray-800">
                <AboutPage highlightStyle="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent" />
            </Template>
            <Template style="bg-linear-to-b/oklch from-gray-300 to-gray-100 text-gray-800">
                <EducationPage highlightStyle="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent" />
            </Template>
            <Template style="bg-linear-to-b/oklch from-gray-100 to-gray-300 text-gray-800">
                <ExperiencePage highlightStyle="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent" />
            </Template>
        </div>
    );
}

export default App;
