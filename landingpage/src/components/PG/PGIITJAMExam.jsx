import React from 'react'
import Header from '../UG/Header'
import { useState } from 'react'
import './GATECSS.css'
import table1 from '../PG/Images/iitjamtableimg1.png'
import tabimg from '../PG/Images/iitjamtableimg2.png'
import tabimg3 from '../PG/Images/iitjamtableimg3.png'

// IITJAM exam pagesi
import IITJAMExamPattern from './ExamPageComponent/IITJAMExamPage/IITJAMExamPattern'
import IITJAMEligibility from './ExamPageComponent/IITJAMExamPage/IITJAMEligibility'


import './PGIITJAMExam.css'

export const PGIITJAMExam = () => {
    const [selected, setSelected] = useState(null)
    const toggle2 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
  return (
    <div className='' style={{margin: '2rem'}}>
        <Header/>
        <div className='FAQCONTENT' id='faq'>
            <div className="wrapper-3 container">
            
            <div className='' >
                <h1>IITJAM</h1>
          
            </div>
             <div className='sdfsf'>
                <div className="accordion">
                        {sixtoten.map((item, i2) => (
                            <div className="item2">
                                <div className="title" onClick={() => toggle2(i2)}>
                                    <h2>{item.Qustion}</h2>
                                    <span>{selected === i2 ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i2 ? 'content-show2' : 'content2'}>
                                    <div>
                                        {/* <div className='imagessg'> */}
                                        <div className={item.class}>
                                            <div>
                                            <ul className={item.clName}>
                                                <div className='exSpace'>
                                                <li><b>{item.answer}</b></li><br />
                                               
                                                </div>
                                            </ul>
                                            </div>
                                            {/* <div className='imgSection'>
                                            <img src={item.ansIMG} alt="" />
                                            </div> */}
                                        
                                        </div>
                                                                        
                                    
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
             </div>

            </div>
        </div>
        </div>
  )
}




const sixtoten = [
    {
        Qustion: "CONDUCTING INSTITUTE",
        answer: "IIT GUWAHATI",
        
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<IITJAMExamPattern/>],   
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<IITJAMEligibility/>],
       


       
    },
// syllabus ================================
    {
        clName:'jamSYLLABUS',
        class: 'imagessg4',


        Qustion: "SYLLABUS",
        answer: "• IIT JAM SYLLABUS 2023 FOR GEOLOGY (GG):",
        bold1: "• The Planet Earth:",
        answer1: " Origin of the Solar System and the Earth; Geosphere and the composition of the Earth; Shape and size of the earth; Earth-moon system; Formation of continents and oceans; Dating rocks and age of the Earth; Volcanism and volcanic landforms; Interior of Earth; Earthquakes; Earth’s magnetism and gravity, Isostasy; Elements of Plate tectonics; Orogenic cycles.",
        bold2: "• Geomorphology:",
        answer2: " Weathering and erosion; Transportation and deposition due to wind, ice, river, sea, and resulting landforms, structurally controlled landforms.",
        bold3: "• Structural Geology:",
        answer3: " Concept of stratum; Contour; Outcrop patterns; Maps and cross-sections; Dip and strike; Classification and origin of folds, faults, joints, unconformities, foliations, and lineation, shear zones. Stereographic and equal-area projections of planes and lines; computation of true thickness of beds from outcrops and bore-holes.",
        bold4: "• Palaeontology:",
        answer4: " Major steps in the evolution of life forms; Fossils; their mode of preservation and utility; Morphological characters, major evolutionary trends and ages of important groups of animals – Brachiopoda, Mollusca, Trilobita, Graptolitoidea, Anthozoa, Echinodermata; Gondwana plant fossils; Elementary idea of vertebrate fossils in India.",
        bold5: "• Stratigraphy:",
        answer5: " Principles of stratigraphy; Litho-, Chrono- and biostratigraphic classification; distribution and classification of the stratigraphic horizons of India from Archaean to Recent.",
        bold6: "• Mineralogy:",
        answer6: " Symmetry and forms in common crystal classes; Physical properties of minerals; Isomorphism and polymorphism, Classification of minerals; Structure of silicates; Mineralogy of common rock-forming minerals; Mode of occurrence of minerals in rocks. Transmitted polarised light microscopy and optical properties of uniaxial and biaxial minerals.",
        bold7: "• Petrology:",
        answer7: " Definition and classification of rocks; Igneous rocks-forms of igneous bodies; Crystallization from magma; classification, association, and genesis of igneous rocks; Sedimentary rocks – classification, texture, and structure; size and shape of sedimentary bodies. Metamorphic rocks – classification, facies, zones, and texture. Characteristic mineral assemblages of pelites in the Barrovian zones and mafic rocks in common facies.",
        bold8: "• Economic Geology:",
        answer8: " Properties of common economic minerals; General processes of formation of mineral deposits; Physical characters; Mode of occurrence and distribution in India both of metallic and non-metallic mineral deposits; Coal and petroleum occurrences in India.",
        bold9: "• Applied Geology:",
        answer9: " Ground Water; Principles of Engineering Geology",
        bold10: "• IIT JAM SYLLABUS 2023 FOR MATHEMATICS (MA):",
        bold11: "• Sequences and Series of Real Numbers:",
        answer11: " Sequence of real numbers, the convergence of sequences, bounded and monotone sequences, convergence criteria for sequences of real numbers, Cauchy sequences, subsequence, Bolzano-Weierstrass theorem. Series of real numbers, absolute convergence, tests of convergence for series of positive terms – comparison test, ratio test, root test; Leibniz test for convergence of alternating series.",
        bold12: "• Functions of One Real Variable:",
        answer12: " Limit, continuity, intermediate value property, differentiation, Rolle’s Theorem, mean value theorem, L'Hospital rule, Taylor's theorem, maxima, and minima.",
        bold13: "• Functions of Two or Three Real Variables:",
        answer13: " Limit, continuity, partial derivatives, differentiability, maxima, and minima.",
        bold14: "• Integral Calculus:",
        answer14: " Integration as the inverse process of differentiation, definite integrals, and their properties, fundamental theorem of calculus. Double and triple integrals, change of order of integration, calculating surface areas and volumes using double integrals, calculating volumes using triple integrals.",
        bold15: "• Differential Equations:",
        answer15: " Ordinary differential equations of the first order of the form y'=f(x,y), Bernoulli’s equation, exact differential equations, integrating factor, orthogonal trajectories, homogeneous differential equations, variable separable equations, linear differential equations of second order with constant coefficients, Method of variation of parameters, Cauchy-Euler equation.",
        bold16: "• Vector Calculus:",
        answer16: " Scalar and vector fields, gradient, divergence, curl, line integrals, surface integrals, Green, Stokes, and Gauss theorems.",
        bold17: "• Group Theory:",
        answer17: "Groups, subgroups, Abelian groups, non-Abelian groups, cyclic groups, permutation groups, normal subgroups, Lagrange's Theorem for finite groups, group homomorphism, and basic concepts of quotient groups.",
        bold18: "• Linear Algebra:",
        answer18: " Finite dimensional vector spaces, linear independence of vectors, basis, dimension, linear transformations, matrix representation, range space, null space, rank-nullity theorem. Rank and inverse of a matrix, determinant, solutions of systems of linear equations, consistency conditions, eigenvalues, and eigenvectors for matrices, Cayley-Hamilton theorem.",
        bold19: "• Real Analysis:",
        answer19: " Interior points, limit points, open sets, closed sets, bounded sets, connected sets, compact sets, completeness of R. Power series (of real variable), Taylor’s series, radius and interval of convergence, term-wise differentiation, and integration of power series.",
        bold20: "• IIT JAM SYLLABUS 2021 FOR MATHEMATICAL STATISTICS (MS):",
        answer20: "• The JAM test paper for Mathematical Statistics consists of two subjects which are Mathematics and Statistics. The weightage given to Mathematics is 40 percent and Statistics is 60 percent.",
        bold21: "• IIT JAM 2023 MATHEMATICS SYLLABUS:",
        bold22: "• Sequences and Series:",
        answer22: " Convergence of sequences of real numbers, Comparison, root and ratio tests for convergence of series of real numbers.",
        bold23: "• Differential Calculus:",
        answer23: " Limits, continuity, and differentiability of functions of one and two variables. Rolle's theorem, mean value theorems, Taylor's theorem, indeterminate forms, maxima and minima of functions of one and two variables.",
        bold24: "• Integral Calculus:",
        answer24: "  Fundamental theorems of integral calculus. Double and triple integrals, applications of definite integrals, arc lengths, areas, and volumes.",
        bold25: "• Matrices:",
        answer25: " Rank, inverse of a matrix, Systems of linear equations, Linear transformations, eigenvalues, and eigenvectors. Cayley-Hamilton theorem, symmetric, skew-symmetric, and orthogonal matrices.",
        bold26: "•IIT JAM 2023 STATISTICS SYLLABUS:",
        bold26: "• Probability:",
        answer26: " Axiomatic definition of probability and properties, conditional probability, multiplication rule. The theorem of total probability. Bayes’ theorem and independence of events.",
        bold27: "• Random Variables:",
        answer27: "  Probability mass function, probability density function, and cumulative distribution functions, distribution of a function of a random variable. Mathematical expectation, moments, and moment generating function. Chebyshev's inequality.",
        bold28: "• Standard Distributions:",
        answer28: " Binomial, negative binomial, geometric, Poisson, hypergeometric, uniform, exponential, gamma, beta, and normal distributions. Poisson and normal approximations of a binomial distribution.",
        bold29: "• Joint Distributions:",
        answer29: " Joint, marginal, and conditional distributions. Distribution of functions of random variables. Joint moment generating function. Product moments, correlation, simple linear regression. Independence of random variables.",
        bold30: "• Sampling Distributions:",
        answer30: " Chi-square, t and F distributions, and their properties.",
        bold31: "• Limit Theorems:",
        answer31: " Weak law of large numbers. Central limit theorem (i.i.d.with finite variance case only).",
        bold32: "• Estimation:",
        answer32: " Unbiasedness, consistency, and efficiency of estimators, method of moments, and method of maximum likelihood. Sufficiency, factorization theorem. Completeness, Rao-Blackwell, and Lehmann-Scheffe theorems, uniformly minimum variance unbiased estimators. Rao-Cramer inequality. Confidence intervals for the parameters of univariate normal, two independent normal, and one parameter exponential distributions.",
        bold33: "• Testing of Hypotheses:",
        answer33: "  Basic concepts, applications of Neyman-Pearson Lemma for testing simple and composite hypotheses. Likelihood ratio tests for parameters of univariate normal distribution.",
        bold34: "• IIT JAM SYLLABUS 2023 FOR PHYSICS (PH):",
        bold35: "• Mathematical Methods:",
        answer35: " Calculus of single and multiple variables, partial derivatives, Jacobian, imperfect and perfect differentials, Taylor expansion, Fourier series. Vector algebra, Vector Calculus, Multiple integrals, Divergence theorem, Green’s theorem, Stokes’ theorem. First-order equations and linear second-order differential equations with constant coefficients. Matrices and determinants, Algebra of complex numbers.",
        bold36: "• Mechanics and General Properties of Matter:",
        answer36: " Newton’s laws of motion and applications, Velocity and acceleration in Cartesian, polar and cylindrical coordinate systems, uniformly rotating frame, centrifugal and Coriolis forces, Motion under a central force, Kepler’s laws, Gravitational Law and field, Conservative and non-conservative forces. System of particles, Centre of mass, equation of motion of the CM, conservation of linear and angular momentum, conservation of energy, variable mass systems. Elastic and inelastic collisions. Rigid body motion, fixed axis rotations, rotation and translation, moments of Inertia and products of Inertia, parallel and perpendicular axes theorem. Principal moments and axes. Kinematics of moving fluids, equation of continuity, Euler’s equation, Bernoulli’s theorem.",
        bold37: "• Oscillations, Waves and Optics:",
        answer37: " Differential equation for simple harmonic oscillator and its general solution. Superposition of two or more simple harmonic oscillators. Lissajous figures. Damped and forced oscillators, resonance. Wave equation, traveling, and standing waves in one-dimension. Energy density and energy transmission in waves. Group velocity and phase velocity. Sound waves in media. Doppler Effect. Fermat’s Principle. General theory of image formation. Thick lens, thin lens, and lens combinations. Interference of light, optical path retardation. Fraunhofer diffraction. Rayleigh criterion and resolving power. Diffraction gratings. Polarization: linear, circular, and elliptic polarization. Double refraction and optical rotation.",
        bold38: " • Electricity and Magnetism:",
        answer38: " Coulomb’s law, Gauss’s law. Electric field and potential. Electrostatic boundary conditions, Solution of Laplace’s equation for simple cases. Conductors, capacitors, dielectrics, dielectric polarization, volume and surface charges, electrostatic energy. Biot-Savart law, Ampere’s law, Faraday’s law of electromagnetic induction, Self and mutual inductance. Alternating currents. Simple DC and AC circuits with R, L, and C components. Displacement current, Maxwell’s equations and plane electromagnetic waves, Poynting’s theorem, reflection, and refraction at a dielectric interface, transmission, and reflection coefficients (normal incidence only). Lorentz Force and motion of charged particles in electric and magnetic fields.", 
        bold39: "• Kinetic theory, Thermodynamics:",
        answer39: " Elements of Kinetic theory of gases. Velocity distribution and Equipartition of energy. Specific heat of Mono-, di- and tri-atomic gases. Ideal gas, van-der-Waals gas, and equation of state. Mean free path. Laws of thermodynamics. Zeroth law and the concept of thermal equilibrium. First law and its consequences. Isothermal and adiabatic processes. Reversible, irreversible, and quasi-static processes. Second law and entropy. Carnot cycle. Maxwell’s thermodynamic relations and simple applications. Thermodynamic potentials and their applications. Phase transitions and Clausius-Clapeyron equation. Ideas of ensembles, Maxwell-Boltzmann, Fermi-Dirac, and Bose-Einstein distributions.",
        bold40: "• Modern Physics:",
        answer40: " Inertial frames and Galilean invariance. Postulates of special relativity. Lorentz transformations. Length contraction, time dilation. Relativistic velocity addition theorem, mass-energy equivalence. Blackbody radiation, photoelectric effect, Compton effect, Bohr’s atomic model, X-rays. Wave-particle duality, Uncertainty principle, the superposition principle, calculation of expectation values, Schrödinger equation, and its solution for one, two, and three-dimensional boxes. Solution of Schrödinger equation for the one-dimensional harmonic oscillator. Reflection and transmission at a step potential, Pauli exclusion principle. Structure of the atomic nucleus, mass, and binding energy. Radioactivity and its applications. Laws of radioactive decay.",
        bold41: "• olid State Physics, Devices, and Electronics:",
        answer41: " Crystal structure, Bravais lattices, and basis. Miller indices. X-ray diffraction and Bragg's law; Intrinsic and extrinsic semiconductors, variation of resistivity with temperature. Fermi level. p-n junction diode, I-V characteristics, Zener diode, and its applications, BJT: characteristics in CB, CE, CC modes. Single-stage amplifier, two-stage R-C coupled amplifiers. Simple Oscillators: Barkhausen condition, sinusoidal oscillators. OPAMP and applications: Inverting and non-inverting amplifier. Boolean algebra: Binary number systems; conversion from one system to another system; binary addition and subtraction. Logic Gates AND, OR, NOT, NAND, NOR exclusive OR; Truth tables; a combination of gates; de Morgan’s theorem",
        bold42: "• IIT JAM 2023 PHYSICAL CHEMISTRY SYLLABUS:",
        bold43: "• Basic Mathematical Concepts:",
        answer43: " Functions; maxima and minima; integrals; ordinary differential equations; vectors and matrices; determinants; elementary statistics and probability theory.",
        bold44: "• Atomic and Molecular Structure:",
        answer44: " Fundamental particles; Bohr’s theory of hydrogen-like atom; wave-particle duality; uncertainty principle; Schrödinger’s wave equation; quantum numbers; shapes of orbitals; Hund’s rule and Pauli’s exclusion principle; electronic configuration of simple homonuclear diatomic molecules.",
        bold45: "• Theory of Gases:",
        answer45: " Equation of state for ideal and non-ideal (van der Waals) gases; Kinetic theory of gases; Maxwell-Boltzmann distribution law; equipartition of energy.",
        bold46: "• Solid State:",
        answer46: " Crystals and crystal systems; X-rays; NaCl and KCl structures; close packing; atomic and ionic radii; radius ratio rules; lattice energy; Born-Haber cycle; isomorphism; heat capacity of solids.",
        bold47: "• Chemical Thermodynamics:",
        answer47: " Reversible and irreversible processes; first law and its application to ideal and nonideal gases; thermochemistry; second law; entropy and free energy; criteria for spontaneity.",
        bold48: "• Chemical and Phase Equilibria:",
        answer48: " Law of mass action; Kp, Kc, Kx and Kn; effect of temperature on K; ionic equilibria in solutions; pH and buffer solutions; hydrolysis; solubility product; phase equilibria–phase rule and its application to one-component and two-component systems; colligative properties.",
        bold49: "• Electrochemistry:",
        answer49: " Conductance and its applications; transport number; galvanic cells; EMF and free energy; concentration cells with and without transport; polarography; concentration cells with and without transport; Debey-Huckel-Onsagar theory of strong electrolytes.",
        bold50: "• Chemical Kinetics:",
        answer50: " Reactions of various order; Arrhenius equation; collision theory; transition state theory; chain reactions – normal and branched; enzyme kinetics; photochemical processes; catalysis.",
        bold51: "• Adsorption:",
        answer51: " Gibbs adsorption equation; adsorption isotherm; types of adsorption; surface area of adsorbents; surface films on liquids.",
        bold52: "• Spectroscopy:",
        answer52: " Beer-Lambert law; fundamental concepts of rotational, vibrational, electronic and magnetic resonance spectroscopy.",
        bold53: "• IIT JAM 2023 ORGANIC CHEMISTRY SYLLABUS:",
        bold54: "• Basic Concepts in Organic Chemistry and Stereochemistry:",
        answer54: " Electronic effects (resonance, inductive, hyperconjugation) and steric effects and its applications (acid/base property); optical isomerism in compounds with and without any stereocenters (allenes, biphenyls); conformation of acyclic systems (substituted ethane/n-propane/n-butane) and cyclic systems (mono- and di-substituted cyclohexanes).",
        bold55: "• Organic Reaction Mechanism and Synthetic Applications:",
        answer55: " Chemistry of reactive intermediates (carbocations, carbanions, free radicals, carbenes, nitrenes, benzynes etc.); Hofmann-Curtius-Lossen rearrangement, Wolff rearrangement, Simmons-Smith reaction, Reimer-Tiemann reaction, Michael reaction, Darzens reaction, Wittig reaction and McMurry reaction; Pinacol-pinacolone, Favorskii, benzilic acid rearrangement, dienone-phenol rearrangement, Baeyer-Villeger reaction; oxidation and reduction reactions in organic chemistry; organometallic reagents in organic synthesis (Grignard, organolithium and organocopper); Diels-Alder, electrocyclic and sigmatropic reactions; functional group inter-conversions and structural problems using chemical reactions.",
        bold56: "• Qualitative Organic Analysis:",
        answer56: " Identification of functional groups by chemical tests; elementary UV, IR, and 1H NMR spectroscopic techniques as tools for structural elucidation.",
        bold57: "• Natural Products Chemistry:",
        answer57: " Chemistry of alkaloids, steroids, terpenes, carbohydrates, amino acids, peptides, and nucleic acids.",
        bold58: "• Aromatic and Heterocyclic Chemistry:",
        answer58: " Monocyclic, bicyclic and tricyclic aromatic hydrocarbons, and monocyclic compounds with one hetero atom: synthesis, reactivity, and properties.",
        bold59: "• IIT JAM 2021 Inorganic Chemistry Syllabus:",
        bold60: "• Periodic Table:",
        answer60: " Periodic classification of elements and periodicity in properties; general methods of isolation and purification of elements.",
        bold61: "• Chemical Bonding and Shapes of Compounds:",
        answer61: " Types of bonding; VSEPR theory and shapes of molecules; hybridization; dipole moment; ionic solids; structure of NaCl, CsCl, diamond, and graphite; lattice energy.",
        bold62: "• Main Group Elements (s and p blocks):",
        answer62: " General concepts on group relationships and gradation in properties; structure of electron-deficient compounds involving main group elements.",
        bold63: "• Transition Metals (d block):",
        answer63: " Characteristics of 3d elements; oxide, hydroxide, and salts of first row metals; coordination complexes: structure, isomerism, reaction mechanism, and electronic spectra; VB, MO and Crystal Field theoretical approaches for structure, colour, and magnetic properties of metal complexes; organometallic compounds having ligands with back bonding capabilities such as metal carbonyls, carbenes, nitrosyls, and metallocene; homogenous catalysis.",
        bold64: "• inorganic Chemistry:",
        answer64: " Essentials and trace elements of life; basic reactions in the biological systems and the role of metal ions, especially Fe2+, Fe3+, Cu2+, and Zn2+; structure and function of haemoglob in and myoglobin and carbonic anhydrase.",
        bold65: "• Instrumental Methods of Analysis:",
        answer65: " Basic principles; instrumentations and simple applications of conductometry, potentiometry, and UV-vis spectrophotometry; analysis of water, air and soil samples.",
        bold66: "• Analytical Chemistry:",
        answer66: " Principles of qualitative and quantitative analysis; acid-base, oxidation-reduction and complexometric titrations using EDTA; precipitation reactions; use of indicators; use of organic reagents in inorganic analysis; radioactivity; nuclear reactions; applications of isotopes.",
        bold67: "• IIT JAM General Biology:",
        answer67: "• Taxonomy",
        answer68: "• Heredity",
        answer69: "• Genetic variation",
        answer70: "• Conservation",
        answer71: "• Principles of ecology",
        answer72: "• Evolution",
        answer73: "• Techniques in modern biology",
        bold68: "• IIT JAM Biochemistry and Physiology:",
        answer74: "• Carbohydrates",
        answer75: "• Proteins",
        answer76: "• Lipids;",
        answer77: "• Nucleic acids",
        answer78: "• Enzymes",
        answer79: "• Vitamins",
        answer80: "• Hormones",
        answer81: "• Metabolism – Glycolysis, TCA cycle, Oxidative Phosphorylation",
        answer82: "• Nitrogen Fixation, Fertilization, and Osmoregulation",
        answer83: "• Vertebrates-Nervous system",
        answer84: "• Endocrine system",
        answer85: "• Vascular system",
        answer86: "• Immune system",
        answer87: "• Digestive system and Reproductive System.",
        bold69: "• IIT JAM Basic Biotechnology:",
        answer88: "• Tissue culture",
        answer89: "• Application of enzymes",
        answer90: "• Antigen-antibody interaction",
        answer91: "• Antibody production",
        answer92: "• Diagnostic aids",
        bold70: "• IIT JAM Molecular Biology:",
        answer93: "• DNA",
        answer94: "• RNA",
        answer95: "• Replication",
        answer96: "• Transcription",
        answer97: "• Translation",
        answer98: "• Proteins",
        answer99: "• Lipids and Membranes",
        answer100: "• Operon model",
        answer101: "• Gene transfer",
        bold71: "• IIT JAM Cell Biology:",
        answer102: "• Cell cycle",
        answer103: "• Cytoskeletal elements",
        answer104: "• Mitochondria",
        answer105: "• Endoplasmic reticulum",
        answer106: "• Chloroplast",
        answer107: "• Golgi apparatus",
        answer108: "• Signalling",
        bold72: "•IIT JAM Microbiology:",
        answer109: "• Isolation",
        answer110: "• Cultivation",
        answer111: "• Structural features of virus",
        answer112: "• Bacteria",
        answer113: "• Fungi",
        answer114: "• Protozoa",
        answer115: "• Pathogenic micro-organisms"



    },

    {
        Qustion: "IMPORTANT DATES",
        ansIMG: [tabimg3],
        clName:'jamIMPORTANT',
        class: 'imagessg5',


    },
]

