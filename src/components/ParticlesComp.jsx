import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesComp = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000", // Deep night sky blue
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff", // Soft white like moonlight
                    },
                    shape: {
                        type: "circle", // Can be replaced with custom crescent if needed
                    },
                    opacity: {
                        value: 0.7,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.3,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 3, max: 8 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 2,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 0.6,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "bounce",
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
