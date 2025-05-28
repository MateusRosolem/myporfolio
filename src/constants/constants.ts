// Import React to enable JSX syntax for icon components
import React from 'react';
import { Experience, NavItem, Project, Skill, TranslatableString } from '../types/types';

// Heroicons - Outline (Mantidos para uso geral e fallback)
const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return React.createElement(
    "svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" })
  );
};

const CommandLineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return React.createElement(
    "svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 7.5 3 12m0 0 3.75 4.5M3 12h18" })
  );
};

const CircleStackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return React.createElement(
    "svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" })
  );
};

const LanguageIconHero: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( // Renamed to avoid conflict
  React.createElement(
    "svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 0 12.758M3 20.25V3.75M10.5 3.75a48.474 48.474 0 0 1 0 12.758M10.5 20.25V3.75" })
  )
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement(
        "svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m8.198 0a24.716 24.716 0 0 0-.732 0m0 0a24.705 24.705 0 0 0-.732 0M12 12.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm4.5 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm-9 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" })
    )
);

// Technology Specific Icons (definitions remain the same)
const JavaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (React.createElement("svg", { role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "Java"), React.createElement("path", {d:"M12.53.295C11.014-.406 8.992.16 8.308.497c-.722.335-2.035.973-2.035 2.374v.378c.028.03.054.06.082.09.417.45.896.836 1.436 1.157.952.567 2.129.765 3.182.765 1.052 0 2.23-.2 3.182-.765.54-.32 1.018-.708 1.436-1.157.027-.03.053-.06.082-.09v-.378c0-1.4-1.313-2.04-2.035-2.374-.684-.337-2.706-.903-4.221-.202zm-1.016 18.948c-.503.069-1.018.104-1.542.104-1.05 0-2.118-.202-3.19-.695-.562-.264-1.066-.6-1.51-1.003v.716c0 .77.41 1.495.806 2.109.58.9 1.434 1.647 2.383 2.203.934.544 1.949.77 2.98.77.043 0 .084 0 .127-.002a4.432 4.432 0 00.106-1.242c-.03-.422-.045-.848-.045-1.278a4.617 4.617 0 01.012-.387l.026-.385zm5.132-1.973c-.444.403-.948.74-1.51 1.004-.952.45-2.067.703-3.174.703-.525 0-1.04-.035-1.543-.104l.027.385c.005.08.008.16.008.242a4.345 4.345 0 00-.045 1.278c0 .43.012.85.032 1.242a.883.883 0 00.126.002c1.032 0 2.047-.226 2.981-.77.95-.556 1.804-1.303 2.384-2.203.395-.614.805-1.34.805-2.11v-.715zM8.25 6.606C6.612 6.606 5.01 7.04 5.01 8.417v5.05c0 .76.392 1.44.756 2.034.372.603.864 1.107 1.476 1.518.952.645 2.207.99 3.509.99.056 0 .11-.002.166-.004a5.047 5.047 0 00.14-.013V7.062a5.043 5.043 0 00-.14-.012.823.823 0 00-.165-.005c-1.302 0-2.557.345-3.51 1.013-.612.41-.955.915-1.476 1.518-.14.227-.25.477-.33.752h.002c.146-.26.32-.51.52-.742.45-.524.98-.926 1.592-1.207.952-.434 2.082-.652 3.23-.652.055 0 .11 0 .164.002l.14.008V6.606H8.25zm7.502 0V8.15l.14-.008c.054-.002.109-.002.164-.002 1.148 0 2.278.218 3.23.652.613.28 1.142.683 1.592 1.207.2.232.375.482.52.742h.002c-.08-.275-.19-.525-.33-.752-.52-.603-.864-1.107-1.476-1.518C17.308 7.04 15.896 6.605 14.25 6.605h-1.5zm-1.795 6.373c0 .288.022.572.063.85h.002a.08.08 0 01.003.011c.295 1.29.91 2.503 1.844 3.64h.002l.004.003.002.002c.002 0 .002.002.004.002h.002a.087.087 0 01.006.004l.002.001c.49.29 1.125.45 1.773.45.648 0 1.283-.16 1.772-.45l.002-.001.007-.004h.002c.002 0 .002-.002.004-.002l.002-.002.004-.003h.002c.935-1.137 1.55-2.35 1.845-3.64a.08.08 0 01.003-.012h.002a4.69 4.69 0 00.063-.85V7.046h-7.496v5.933z"})) );
const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "Python"), React.createElement("path", {d:"M16.223 3.014H7.778C7.778 1.348 6.43 0 4.765 0H3.014C1.348 0 0 1.348 0 3.014v1.75c0 1.666 1.348 3.015 3.014 3.015h1.75c1.665 0 3.015-1.349 3.015-3.015v-.13c0-1.062.6-1.665 1.666-1.665h4.584c1.062 0 1.666.603 1.666 1.665v4.583c0 1.063-.604 1.666-1.666 1.666H9.223c-1.062 0-1.666-.603-1.666-1.666V9.348c0-1.666-1.349-3.015-3.015-3.015H3.014c-1.666 0-3.014 1.349-3.014 3.015v7.598c0 1.666 1.348 3.014 3.014 3.014h1.75c1.666 0 3.015-1.348 3.015-3.014v-1.635c0-1.062-.6-1.666-1.666-1.666H4.765c-1.063 0-1.666-.604-1.666-1.666V9.478c0-1.062.603-1.666 1.666-1.666h4.583c1.063 0 1.666.604 1.666 1.666v4.454c0 1.665 1.348 3.014 3.014 3.014h1.636c1.666 0 3.014-1.349 3.014-3.014v-1.75c0-1.665-1.348-3.014-3.014-3.014h-1.636c-1.666 0-3.014 1.349-3.014 3.014v.13c0 1.063-.603 1.666-1.666 1.666H7.778c-1.062 0-1.666.603-1.666 1.666v1.635c0 1.666 1.348 3.014 3.014 3.014h7.598c1.666 0 3.015-1.348 3.015-3.014v-1.75c0-1.666-1.349-3.015-3.015-3.015h-1.75c-1.665 0-3.014 1.349-3.014 3.015v1.635M20.986 0c-1.666 0-3.014 1.348-3.014 3.014v1.75c0 1.666 1.348 3.015 3.014 3.015h1.75C24.402 7.78 24 6.43 24 4.764V3.014C24 1.348 22.652 0 20.986 0z"})) );
const TypeScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "TypeScript"), React.createElement("path", {d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.86 6.075L18.432 5.13H5.412l.335 3.708h11.042l-.328 3.642H5.917l.342 3.806h10.27l-.593 6.606-3.007 1.04-2.94-.953-.192-2.13H6.24l.35 3.86 5.406 1.844 5.352-1.8 L19.71 6.076h-.35z"})) );
const JavaScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "JavaScript"), React.createElement("path", {d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.99-1.746-2.228-2.223a10.603 10.603 0 00-1.966-.644 3.103 3.103 0 01-1.017-.211c-.316-.123-.44-.3-.44-.567 0-.24.084-.42.29-.55.29-.183.735-.28 1.336-.28.707 0 1.173.174 1.487.51.42.461.537.96.575 1.395H22.03c.018-.69-.128-1.33-.453-1.907-.324-.578-.793-1.035-1.404-1.368-.61-.333-1.32-.5-2.127-.5-.96 0-1.752.22-2.372.658-.62.438-.93 1.035-.93 1.79 0 .603.23 1.1.688 1.462.458.363 1.18.62 2.162.777.982.156 1.72.362 2.217.617.496.255.744.62.744 1.096 0 .48-.22  Minoan.87-.658 1.17-.438.3-1.045.45-1.817.45-.497 0-.9-.06-1.208-.178-.308-.118-.563-.29-.762-.514a2.002 2.002 0 01-.48-.797H13.1c.137.84.55 1.518 1.236 2.03.688.513 1.54.77 2.556.77.93 0 1.704-.204 2.316-.61.612-.408.918-.967.918-1.677 0-.25-.03-.49-.09-.723zM9.03 12.004c0-.015 0-.034.002-.053-.002-.02-.002-.04-.002-.06v-1.008c0-1.01.318-1.798.953-2.363.635-.565 1.456-.848 2.463-.848.96 0 1.745.24 2.355.725.61.484.916 1.162.916 2.037v1.36c0 .04-.002.07-.003.09.001.02.003.04.003.05 0 .016 0 .034-.002.05.002.02.002.04.002.06v1.007c0 1.01-.318 1.798-.954 2.363-.635.565-1.455.848-2.462.848-.96 0-1.745-.24-2.355-.725-.61-.484-.916-1.16-.916-2.036v-1.36zm1.492.002v1.36c0 .346.097.62.29.82.195.2.458.3.79.3.332 0 .596-.1.79-.3.194-.2.29-.474.29-.82v-1.36c0-.346-.096-.62-.29-.82-.194-.2-.458-.3-.79-.3-.332 0-.595.1-.79.3-.193.2-.29.475-.29.82z"})) );
const HTML5Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "HTML5"), React.createElement("path", {d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622H5.412l.698 8.01h9.126l-.326 3.426-2.91.804-2.956-.81-.188-2.11H6.248l.33 4.171L12 20.314l5.379-1.443.744-8.157H8.531z"})) );
const CSS3Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "CSS3"), React.createElement("path", {d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.12l-.213 2.212H5.84l.213 2.622h9.27l-.318 3.426-2.91.804-2.956-.81-.188-2.11H6.248l.33 4.17L12 20.314l5.379-1.443.744-8.157H8.53l-.232-2.718h11.21l.23-2.622z"})) );
const CIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "C"), React.createElement("path", {fill:"currentColor", d:"M14.182 12.004a2.182 2.182 0 100-4.364 2.182 2.182 0 000 4.364zm0-6.545c-3.61 0-6.545 2.936-6.545 6.545s2.936 6.545 6.545 6.545c1.752 0 3.354-.69 4.547-1.808l-1.484-1.595a4.05 4.05 0 01-3.063 1.273c-2.278 0-4.13-1.852-4.13-4.13s1.852-4.13 4.13-4.13c1.164 0 2.218.484 2.96 1.272l1.484-1.594A6.475 6.475 0 0014.182 5.46zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"})) );
const SpringIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "Spring"), React.createElement("path", {d:"M0 11.109C0 5.02 5.02 0 11.11 0c5.25 0 9.71 3.53 10.75 8.38-.01.01-.01.02-.02.03-.22.5-.34.99-.34 1.49 0 1.03.84 1.88 1.88 1.88.12 0 .23-.01.34-.03C23.99 11.76 24 11.78 24 11.8c0 5.93-4.64 10.9-10.33 11.08-.16 0-.33.01-.5.01-.02 0-.03 0-.05-.01C5.08 22.77 0 17.69 0 11.62zm20.53-1.23c-.57.12-1.1.36-1.57.71a3.07 3.07 0 01-2.06 2.87c-1.08.36-2.28.3-3.3-.22a3.08 3.08 0 01-1.68-2.26c-.26-1.06.02-2.2.74-3.08a3.083 3.083 0 012.73-1.46c.97.07 1.88.55 2.46 1.31.19.25.35.52.48.81.08.18.11.36.11.53-.01.01 0 .01 0 .01zm-15.07 4.6s0-.01.01-.01c.58-.11 1.1-.35 1.57-.69a3.07 3.07 0 012.06-2.87c1.08-.36 2.28-.3 3.3.22a3.08 3.08 0 011.68 2.26c.26 1.06-.02 2.2-.74 3.08-.77.95-1.96 1.41-3.12 1.26-.05 0-.1 0-.15 0-.01 0-.01 0-.02-.01a3.08 3.08 0 01-2.13-2.99c0-.18.03-.36.09-.54.01-.01.01-.01.01-.02z"})) );
const ReactLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "React"), React.createElement("circle", {fill:"currentColor", cx:"12", cy:"12", r:"2.05"}, null), React.createElement("path", {stroke:"currentColor", strokeWidth:"1", d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13.5c-1.69 0-3.22.82-4.24 2.16l1.41 1.41C9.81 9.43 10.84 9 12 9c1.49 0 2.81.81 3.52 2.03l1.41-1.41C15.68 7.92 13.98 6.5 12 6.5zm0 9c-1.49 0-2.81-.81-3.52-2.03l-1.41 1.41C8.32 16.08 10.02 17.5 12 17.5c1.69 0 3.22-.82 4.24-2.16l-1.41-1.41C14.19 14.57 13.16 15.5 12 15.5zM6.5 12c0-1.69.82-3.22 2.16-4.24l1.41 1.41C9.43 9.81 9 10.84 9 12c0 1.49.81 2.81 2.03 3.52l-1.41 1.41C7.92 15.68 6.5 13.98 6.5 12zm9 0c0-1.49-.81-2.81-2.03-3.52l1.41-1.41C16.08 8.32 17.5 10.02 17.5 12c0 1.69-.82 3.22-2.16 4.24l-1.41-1.41C14.57 14.19 15.5 13.16 15.5 12z"})) );
const NodeJsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "Node.js"), React.createElement("path", {d:"M11.375 22.06L8.011 13.49H3.087L0 22.06h2.85l1.17-3.362h3.63l1.168 3.362h2.55zm-3.52-5.088l1.312-3.836 1.312 3.836H7.854zM12.91 10.395c.23-.032.51-.05.841-.05.703 0 1.28.15 1.73.45.45.3.675.75.675 1.353v5.087h2.55V12.14c0-1.07-.406-1.898-1.218-2.483C16.673 9.07 15.71 8.77 14.59 8.77c-.562 0-1.076.064-1.54.19L12.91 10.395zm8.064 11.665V8.96h2.55V22.06h-2.55zM10.117 2.084c.234-.08.512-.128.835-.128.484 0 .874.146 1.17.437.296.292.444.682.444 1.17s-.148.878-.445 1.17c-.296.292-.686.438-1.17.438-.323 0-.6-.048-.835-.128L8.76 3.61V2.083l1.357-.002v.003z"})) );
const TailwindCSSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "Tailwind CSS"), React.createElement("path", {fill:"currentColor", d:"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.19 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"})) );
const PostgreSQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "PostgreSQL"), React.createElement("path", {d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8.704 6.011h2.121v11.98H8.704V6.01zm6.592 0h2.12v7.806h-2.12V6.01zm0 8.817c0-.504.429-.913.952-.913.525 0 .952.409.952.913s-.427.912-.952.912c-.523 0-.952-.408-.952-.912z"})) );
const GitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", ...props}, React.createElement("title", null, "Git"), React.createElement("path", {d:"M23.382 10.643a2.045 2.045 0 00-1.95-1.556h-2.788V6.63a2.045 2.045 0 00-2.045-2.045H2.045A2.045 2.045 0 000 6.63v10.74a2.045 2.045 0 002.045 2.045h10.74a2.045 2.045 0 002.045-2.045v-2.456h2.788c1.09 0 2.004-.866 2.043-1.95.018-.489-.154-.96-.483-1.326zm-7.794 4.711a.681.681 0 01-.681.681H2.726a.681.681 0 01-.681-.681V7.312a.681.681 0 01.681-.681h10.135a.681.681 0 01.681.681v7.976zm3.407-2.398a.681.681 0 01-.681.681h-3.407V9.915h3.407a.681.681 0 01.681.681v2.986zM14.908 7.84a.681.681 0 11-1.362 0 .681.681 0 011.362 0zm0 8.325a.681.681 0 11-1.362 0 .681.681 0 011.362 0zm4.087-4.162a.681.681 0 11-1.362 0 .681.681 0 011.362 0z"})) );
const GitHubOctocatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", {role:"img", viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg", fill:"currentColor", ...props}, React.createElement("title", null, "GitHub"), React.createElement("path", {d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})) );
const AudioWaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.5 4.5 4.5-4.5m-4.5 4.5V3" }) ) );

// Social Links & Contact
export const GITHUB_PROFILE_URL = "https://github.com/MateusRosolem";
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/mateusrosolem/";
export const CONTACT_EMAIL = "mateusrosolem@gmail.com";

// --- Translatable Texts ---

export const HERO_TEXTS = {
  name: "Mateus Rosolem Baroni", // Name is usually not translated
  role: {
    pt: "Desenvolvedor Backend",
    en: "Backend Developer"
  },
  cvButton: {
    pt: "Download do Curriculo",
    en: "Download CV"
  }
};

export const ABOUT_TEXTS = {
  greeting: {
    pt: "Olá, meu nome é",
    en: "Hello, my name is"
  },
  introduction1: {
    pt: "Sou um Desenvolvedor Backend e Web, atualmente graduando em Ciência da Computação pela UNESP e com formação técnica em Desenvolvimento de Sistemas.",
    en: "I am a Backend and Web Developer, currently pursuing a degree in Computer Science at UNESP and with technical training in Systems Development."
  },
  introduction2: {
    pt: "Minha paixão pela tecnologia floresceu ao conectar a lógica da programação com a criação de experiências de usuário impactantes, o que me permite construir aplicações eficientes e intuitivas.",
    en: "My passion for technology blossomed by connecting the logic of programming with the creation of impactful user experiences, which allows me to build efficient and intuitive applications."
  },
  techIntro: {
    pt: "As tecnologias que fazem parte do meu dia a dia incluem:",
    en: "The technologies that are part of my daily routine include:"
  },
  techList: ["Java", "Spring Boot", "Python", "Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Git", "Docker"] // Keywords for highlighting
};

export const SECTION_TITLES: { [key: string]: TranslatableString } = {
  about: { pt: 'Sobre Mim', en: 'About Me' },
  experience: { pt: 'Experiência Profissional', en: 'Professional Experience' },
  projects: { pt: 'Projetos', en: 'Projects' },
  skills: { pt: 'Habilidades', en: 'Skills' },
  contact: { pt: 'Contato', en: 'Contact' },
};

export const PROJECT_CARD_TEXTS = {
  technologies: { pt: 'Tecnologias:', en: 'Technologies:' },
  github: { pt: 'GitHub', en: 'GitHub' },
  live: { pt: 'Ver Online', en: 'View Online' },
  noProjects: { pt: 'Nenhum projeto para mostrar no momento.', en: 'No projects to display at the moment.'}
};

export const SKILL_CATEGORIES = {
  language: { pt: 'Linguagem', en: 'Language' },
  framework: { pt: 'Framework/Biblioteca', en: 'Framework/Library' },
  database: { pt: 'Banco de Dados', en: 'Database' },
  tool: { pt: 'Ferramenta', en: 'Tool' },
  idiom: { pt: 'Idioma', en: 'Language' }, // 'Language' as in human language
  noSkills: { pt: 'Nenhuma habilidade para mostrar no momento.', en: 'No skills to display at the moment.'}
};

export const CONTACT_TEXTS = {
  intro: {
    pt: "Estou sempre aberto a novas oportunidades e colaborações. Se você tem alguma pergunta, projeto em mente ou apenas quer dizer olá, sinta-se à vontade para entrar em contato!",
    en: "I am always open to new opportunities and collaborations. If you have any questions, a project in mind, or just want to say hello, feel free to get in touch!"
  },
  findMe: {
    pt: "Ou me encontre nas redes sociais:",
    en: "Or find me on social media:"
  }
};

export const FOOTER_TEXTS = {
  copyright: {
    pt: "Mateus Rosolem Baroni. Todos os direitos reservados.",
    en: "Mateus Rosolem Baroni. All rights reserved."
  }
};

export const EXPERIENCE_TEXTS = {
    noExperience: { pt: 'Nenhuma experiência para mostrar no momento.', en: 'No experience to display at the moment.'}
};


// --- Data Structures ---

export const NAV_ITEMS: NavItem[] = [
  { name: { pt: 'Início', en: 'Home' }, href: '#hero' },
  { name: { pt: 'Sobre Mim', en: 'About Me' }, href: '#about' },
  { name: { pt: 'Experiência', en: 'Experience' }, href: '#experience'},
  { name: { pt: 'Projetos', en: 'Projects' }, href: '#projects' },
  { name: { pt: 'Habilidades', en: 'Skills' }, href: '#skills' },
  { name: { pt: 'Contato', en: 'Contact' }, href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'so-ssegado',
    title: { pt: 'SO-SSEGADO', en: 'SO-SSEGADO' },
    description: { 
      pt: 'SO-SSEGADO é um simulador de sistema operacional focado no gerenciamento de recursos de hardware entre diferentes processos, com um destaque especial para o gerenciamento de disco utilizando o algoritmo C-SCAN. O simulador gerencia os seguintes recursos de hardware: CPU, Memória, E/S e Disco. Este projeto de simulador de sistema operacional, SO-SSEGADO, foi desenvolvido como requisito da disciplina de Sistemas Operacionais.',
      en: 'SO-SSEGADO is an operating system simulator focused on managing hardware resources among different processes, with a special emphasis on disk management using the C-SCAN algorithm. The simulator manages the following hardware resources: CPU, Memory, I/O, and Disk. This operating system simulator project, SO-SSEGADO, was developed as a requirement for the Operating Systems course.'
    },
    imageUrl: 'https://www.techtarget.com/rms/onlineimages/ascii_figure2_format_hex_more_mobile.jpg', 
    technologies: ['OS Simulation', 'Resource Management', 'C-SCAN Algorithm', 'Process Management'],
    githubLink: `${GITHUB_PROFILE_URL}/SO-SSEGADO`,
  },
  {
    id: 'sonstg',
    title: { pt: 'SONS Tiro de Guerra', en: 'SONS War Shooting Range' },
    description: {
      pt: 'Plataforma de treinamento para o Tiro de Guerra (TG-02033 SJRP-SP) com biblioteca de comandos militares (áudio e transcrição), simulador interativo com feedback em tempo real, e um sistema de testes e avaliações para monitorar o desempenho dos usuários.',
      en: 'Training platform for the War Shooting Range (TG-02033 SJRP-SP) with a library of military commands (audio and transcription), interactive simulator with real-time feedback, and a system of tests and assessments to monitor user performance.'
    },
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FBrigadaMilitarRS%2Fposts%2Fvoc%25C3%25AA-conhece-a-tradi%25C3%25A7%25C3%25A3o-de-toques-com-o-instrumento-clarim-da-brigada-militarant%2F3570014969721328%2F&psig=AOvVaw0wq_Uz55wWKIK-xsa49G7T&ust=1748394391897000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCHruW6wo0DFQAAAAAdAAAAABAE',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Audio API'],
    liveLink: 'https://sons-tg.vercel.app/',
  },
  {
    id: 'api-spring-security',
    title: { pt: 'API com Spring Security', en: 'API with Spring Security' },
    description: {
      pt: 'Exemplo de API RESTful com Java e Spring Boot, implementando segurança com Spring Security e JWT.',
      en: 'Example of a RESTful API with Java and Spring Boot, implementing security with Spring Security and JWT.'
    },
    imageUrl: 'https://picsum.photos/seed/apispringsecurity/600/400',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    githubLink: `${GITHUB_PROFILE_URL}/api-spring-security-jwt`,
  },
];

const baseIconClassName = "w-full h-full";

export const SKILLS_DATA: Skill[] = [
  // Linguagens
  { id: 's1', name: 'Java', category: SKILL_CATEGORIES.language, icon: React.createElement(JavaIcon, { className: baseIconClassName }) },
  { id: 's1a', name: 'Python', category: SKILL_CATEGORIES.language, icon: React.createElement(PythonIcon, { className: baseIconClassName }) },
  { id: 's2', name: 'TypeScript', category: SKILL_CATEGORIES.language, icon: React.createElement(TypeScriptIcon, { className: baseIconClassName }) },
  { id: 's2a', name: 'JavaScript', category: SKILL_CATEGORIES.language, icon: React.createElement(JavaScriptIcon, { className: baseIconClassName }) },
  { id: 's3', name: 'HTML5', category: SKILL_CATEGORIES.language, icon: React.createElement(HTML5Icon, { className: baseIconClassName }) },
  { id: 's4', name: 'CSS3', category: SKILL_CATEGORIES.language, icon: React.createElement(CSS3Icon, { className: baseIconClassName }) },
  { id: 's4b', name: 'C', category: SKILL_CATEGORIES.language, icon: React.createElement(CIcon, { className: baseIconClassName }) },
  
  // Frameworks/Bibliotecas
  { id: 's10', name: 'Spring Boot', category: SKILL_CATEGORIES.framework, icon: React.createElement(SpringIcon, { className: baseIconClassName }) },
  { id: 's11', name: 'React', category: SKILL_CATEGORIES.framework, icon: React.createElement(ReactLogoIcon, { className: baseIconClassName }) },
  { id: 's11a', name: 'Angular', category: SKILL_CATEGORIES.framework, icon: React.createElement(CodeBracketIcon, { className: baseIconClassName }) }, 
  { id: 's12', name: 'Node.js', category: SKILL_CATEGORIES.framework, icon: React.createElement(NodeJsIcon, { className: baseIconClassName }) },
  { id: 's12b', name: 'Next.js', category: SKILL_CATEGORIES.framework, icon: React.createElement(ReactLogoIcon, { className: baseIconClassName }) },
  { id: 's14', name: 'Tailwind CSS', category: SKILL_CATEGORIES.framework, icon: React.createElement(TailwindCSSIcon, { className: baseIconClassName }) },

  // Banco de Dados
  { id: 's5', name: 'PostgreSQL', category: SKILL_CATEGORIES.database, icon: React.createElement(PostgreSQLIcon, { className: baseIconClassName }) },
  { id: 's5a', name: 'SQL', category: SKILL_CATEGORIES.database, icon: React.createElement(CircleStackIcon, { className: baseIconClassName }) },
  
  // Ferramentas
  { id: 's6', name: 'Git', category: SKILL_CATEGORIES.tool, icon: React.createElement(GitIcon, { className: baseIconClassName }) },
  { id: 's7', name: 'GitHub', category: SKILL_CATEGORIES.tool, icon: React.createElement(GitHubOctocatIcon, { className: baseIconClassName }) },
  { id: 's7x', name: 'GitLab', category: SKILL_CATEGORIES.tool, icon: React.createElement(GitHubOctocatIcon, { className: baseIconClassName }) }, 
  { id: 's7y', name: 'Docker', category: SKILL_CATEGORIES.tool, icon: React.createElement(CommandLineIcon, { className: baseIconClassName }) }, 
  { id: 's7z', name: 'Audio API', category: SKILL_CATEGORIES.tool, icon: React.createElement(AudioWaveIcon, {className: baseIconClassName})},
  { id: 's7b', name: 'APIs REST', category: SKILL_CATEGORIES.tool, icon: React.createElement(CommandLineIcon, { className: baseIconClassName }) },
  { id: 's7c', name: 'Metodologias Ágeis', category: SKILL_CATEGORIES.tool, icon: React.createElement(UsersIcon, { className: baseIconClassName }) },

  // Idiomas
  { id: 's8', name: 'Inglês', category: SKILL_CATEGORIES.idiom, icon: React.createElement(LanguageIconHero, { className: baseIconClassName }) },
  { id: 's9', name: 'Francês', category: SKILL_CATEGORIES.idiom, icon: React.createElement(LanguageIconHero, { className: baseIconClassName }) },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'exp1',
    title: { pt: 'Estagiário de Programação', en: 'Programming Intern' },
    company: 'Shift',
    companyLink: 'https://www.shift.com.br/',
    period: `Fevereiro ${new Date().getFullYear()} - Presente`, // This might need manual translation or a date formatting library for i18n
    description: {
      pt: [
        'Desenvolvimento e manutenção de sistemas backend robustos e escaláveis utilizando Java e o framework Spring Boot.',
        'Criação, otimização e manutenção de interfaces de usuário interativas e responsivas com Angular, TypeScript, HTML e CSS.',
        'Implementação e gerenciamento de pipelines de CI/CD com GitLab, e containerização de aplicações utilizando Docker.',
        'Trabalho colaborativo em equipes multidisciplinares, aplicando metodologias ágeis como Scrum e Kanban para entrega contínua de valor.',
        'Participação ativa em programas de capacitação contínua, focados no aprimoramento de hard skills (e.g., arquiteturas de microsserviços, novas versões de frameworks) e soft skills (e.g., liderança técnica, comunicação eficaz).'
      ],
      en: [
        'Development and maintenance of robust and scalable backend systems using Java and the Spring Boot framework.',
        'Creation, optimization, and maintenance of interactive and responsive user interfaces with Angular, TypeScript, HTML, and CSS.',
        'Implementation and management of CI/CD pipelines with GitLab, and application containerization using Docker.',
        'Collaborative work in multidisciplinary teams, applying agile methodologies such as Scrum and Kanban for continuous value delivery.',
        'Active participation in continuous training programs, focused on enhancing hard skills (e.g., microservices architectures, new framework versions) and soft skills (e.g., technical leadership, effective communication).'
      ]
    },
    logo: React.createElement("img", { 
      src: "https://media.licdn.com/dms/image/v2/C4D0BAQGHnEsj_1hZkg/company-logo_200_200/company-logo_200_200/0/1663784706773?e=2147483647&v=beta&t=B0i-FB_91GKd-WZqX8UWwwOfDO8FS7uDOS6Yi6-67iQ", 
      alt: "Shift Logo", 
      className: "w-full h-full object-contain" 
    })
  },
  {
    id: 'exp2',
    title: { pt: 'Presidente | Desenvolvedor', en: 'President | Developer' },
    company: 'Empresa Junior de Ciência da Computação | UNESP/IBILCE',
    period: 'Janeiro 2023 - Dezembro 2025',
    description: {
      pt: [
        'Liderança da equipe de desenvolvimento front-end, definindo estratégias, metas e acompanhando o progresso dos projetos.',
        'Desenvolvimento de aplicações web interativas e performáticas utilizando ReactJS, NextJS, TypeScript e Tailwind CSS.',
        'Criação de sites e plataformas responsivas, escaláveis e robustas, com foco na experiência do usuário (UX) e SEO.',
        'Participação ativa em eventos de tecnologia, hackathons e workshops, promovendo o ensino de desenvolvimento web e as atividades da Empresa Júnior.'
      ],
      en: [
        'Leadership of the front-end development team, defining strategies, goals, and monitoring project progress.',
        'Development of interactive and high-performance web applications using ReactJS, NextJS, TypeScript, and Tailwind CSS.',
        'Creation of responsive, scalable, and robust websites and platforms, focusing on user experience (UX) and SEO.',
        'Active participation in technology events, hackathons, and workshops, promoting web development education and the activities of the Junior Enterprise.'
      ]
    },
    logo: React.createElement(UsersIcon, { className: "w-10 h-10 md:w-12 md:h-12 text-blue-300" })
  }
];