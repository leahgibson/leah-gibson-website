import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Mathematics() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Mathematics</h1>

            <p className="text-lg text-gray-700 mb-6">
            This portfolio illustrates how I approach problems as a mathematician, combining intuition, rigor, and practical data analysis. 
            I use Principal Component Analysis (PCA) as an example, highlighting both its application and its deeper connection to linear algebra via Singular Value Decomposition (SVD).
            </p>

            <p className="text-lg text-gray-700 mb-6">
            PCA is often described as an unsupervised learning technique because it identifies patterns in data without predefined labels. 
            In practice, it is a tool for dimensionality reduction, noise filtering, and identifying dominant modes of variability. 
            PCA is also a special case of SVD, which underpins many data-science methods from compression to natural language processing. 
            Understanding this connection provides insight into both the mechanics and the intuition of PCA.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Dataset & Set Up
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            I used NOAA&apos;s Extended Reconstructed Sea Surface Temperature (ERSST) dataset, which reports monthly global sea surface temperature (SST) on a 2° latitude × 1° longitude grid from 1854 to the present. 
            The dataset can be accessed in Python using xarray:
          </p>

          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <code>{`iri_url = "http://iridl.ldeo.columbia.edu/SOURCES/.NOAA/.NCDC/.ERSST/.version5/.sst/"
T_convert = "T/[(days)(since)(1960-01-01)]sconcat/streamgridunitconvert/"
url = iri_url + T_convert + "dods"

ds = xr.open_dataset(url)`}</code>
          </pre>

          <p className="text-lg text-gray-700 mb-6">
            For this exploration, I focused on the equatorial Pacific (30°S–30°N, 120°E–60°W) between 1854 and 2024.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            At full resolution, this region contains roughly 2,800 spatial grid points and about 2,000 monthly observations, forming a dataset with 5.6 million individual temperature values. 
            Working directly in such a high-dimensional space is inefficient as the data are highly correlated in both space and time. 
            Neighboring grid points often vary together, and many patterns repeat seasonally or interannually. This redundancy makes PCA an ideal tool. 
            By finding a small set of orthogonal directions that capture most of the variance, PCA lets us describe the essential behavior of the system with far fewer dimensions. 
            In other words, it replaces 2,800 spatial variables with a few modes that still explain most of the observed variability.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            To prepare the data for PCA, I reshaped the SST field into a two-dimensional matrix{' '}<em>X</em> ∈ ℝ<sup><em>n</em>×<em>p</em></sup>, where each row represents a month and each column a spatial location. 
            Each column was standardized to have mean 0 and variance 1, so the entries represent temperature variation from mean at each location over time.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            The dominant pattern of seasonality is immediately apparent in Figure 1. 
            Less obvious but still strong is the El Niño Southern Oscillation (the fluctuations in sea surface temperature in the equatorial region). 
            These dominant modes should emerge in the leading principal components, illustrating that PCA identifies the key structures in the dataset, whether they are obvious physical phenomena (as they are here) or subtle statistical modes.
          </p>

          {/* Figure 1 */}
          <div className="my-8">
            <img 
              src="/mathematics_fig1.gif" 
              alt="Sea surface temperature animation showing seasonality"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 1: Animation ofstandardized sea surface temperature showing dominant seasonal patterns
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            PCA Intuition
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Given a data matrix <em>X</em> ∈ ℝ<sup><em>n</em>×<em>p</em></sup>, where <em>n</em> is the number of samples and <em>p</em> the number of variables, PCA finds a new coordinate system where the axes are ordered by how much of the dataset&apos;s variance they explain. 
            Formally,
          </p>

          <p className="text-center text-lg text-gray-800 font-semibold mb-6">
            <em>P</em> = <em>XW</em>
          </p>

          <p className="text-lg text-gray-700 mb-6">
            where the columns of <em>W</em> are the principal axes, i.e. the eigenvectors of the covariance matrix of <em>X</em>. 
            Each column of <em>P</em> (the principal components) represents the projection of the data onto one of these axes. 
            The first component captures the direction of maximum variance, the second captures the next most variance subject to being orthogonal to the first, and so on.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Because the majority of the variance tends to be concentrated along just a few of these directions, the original dataset can often be reconstructed accurately using only the first <em>m</em> components (where <em>m</em> ≪ <em>s</em>):
          </p>

          <p className="text-center text-lg text-gray-800 font-semibold mb-6">
            <em>X</em> ≈ <em>P</em><sub><em>m</em></sub><em>W</em><sub><em>m</em></sub><sup>⊤</sup>
          </p>

          <p className="text-lg text-gray-700 mb-6">
            This low-rank approximation is one way in which PCA valuable. It reduces the number of variables needed to describe a system from thousands to just a handful while retaining most of the meaningful structure. 
            In many high-dimensional datasets, this is what makes analysis and modeling computationally feasible without sacrificing interpretability.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Implementation and Visualization
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            PCA can easily be implemented using scikit-learn. As we expected, the first principal component captures seasonality while the second isolates ENSO. We can visualize these 
            patterns by projecting the data onto a single principal axis. 
            Figure 2 shows the seasonality, captured by the opposing northern and southern Pacific temperature patterns. 
            Figure 3 highlights the central and eastern equatorial Pacific, corresponding to El Niño and La Niña events. 
            The magnitude of these projections correlates with known event intensities (e.g., 2010–2011 La Niña, 2015–2016 El Niño).
          </p>

          {/* Figure 2 */}
          <div className="my-8">
            <img 
              src="/mathematics_fig2.gif" 
              alt="First principal component showing seasonality"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 2: First principal component capturing seasonal temperature patterns
            </p>
          </div>

          {/* Figure 3 */}
          <div className="my-8">
            <img 
              src="/mathematics_fig3.gif" 
              alt="Second principal component showing ENSO"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 3: Second principal component highlighting ENSO
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Reconstructing SST
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            PCA enables low-dimension reconstruction of the data with controllable accuracy. 
            Suppose we want to model SST with 95% accuracy. 
            We can see how many dimensions are necessary to achieve this.
            Using scikit-learn&apos;s PCA implementation, the cumulative explained variance (Figure 4) shows that 14 principal components capture 95% of the total variance. 
            This is an enormous compression from the original 2,800 spatial dimensions, reducing the total data size to roughly 0.5% of the original. 
          </p>

          {/* Figure 4 */}
          <div className="my-8">
            <img 
              src="/mathematics_fig4.png" 
              alt="Cumulative explained variance"
              className="w-1/2 mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 4: Explained variance as a function of number of components
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Figure 5 shows the reconstructed SST from these 14 components compared to the original data. 
            The two are nearly indistinguishable. The slight differences correspond mostly to small-scale, high-frequency noise that contributes little to the system&apos;s total variance.
          </p>

          {/* Figure 5 */}
          <div className="my-8">
            <img 
              src="/mathematics_fig5.gif" 
              alt="Reconstructed SST using 14 components"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 5: Reconstructed SST using 14 components
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
        PCA and SVD
        </h2>

        <p className="text-lg text-gray-700 mb-6">
        This section is a condensed version of a previous{' '}
        <a 
            href="https://polarvertex.substack.com/p/potato-potato" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
        >
            blog post
        </a>
        .
        </p>

        <p className="text-lg text-gray-700 mb-6">
        Principal Component Analysis (PCA) and Singular Value Decomposition (SVD) are often presented as separate concepts, when in fact PCA is just a special case of SVD. 
        Typically, PCA is used and presented as a tool that seeks orthogonal directions (principal axes) that capture maximal variance in a dataset, while SVD decomposes a matrix into orthogonal transformations and a diagonal scaling. 
        Understanding how these two formulations align clarifies both the mechanics and intuition behind PCA.
        </p>

        <p className="text-lg text-gray-700 mb-4">
        In the traditional derivation, PCA begins with the covariance matrix:
        </p>

        <p className="text-center text-lg text-gray-800 font-semibold mb-6">
        <em>C</em> = (1/(<em>n</em>−1)) <em>X</em><sup>⊤</sup><em>X</em>
        </p>

        <p className="text-lg text-gray-700 mb-6">
        where <em>X</em> is a centered data matrix with <em>n</em> samples and <em>p</em> variables. 
        The eigenvectors of <em>C</em> define the principal axes, and the corresponding eigenvalues 
        quantify the variance along each axis. Projecting the data onto these eigenvectors yields 
        the principal components. This variance-based route frames PCA as a statistical tool for 
        simplifying high-dimensional data while retaining its most informative patterns.
        </p>

        <p className="text-lg text-gray-700 mb-4">
        SVD generalizes the same idea geometrically. Any real matrix <em>X</em> can be factored as:
        </p>

        <p className="text-center text-lg text-gray-800 font-semibold mb-6">
        <em>X</em> = <em>U</em><em>S</em><em>V</em><sup>⊤</sup>
        </p>

        <p className="text-lg text-gray-700 mb-6">
        where <em>U</em> and <em>V</em> are orthogonal matrices and <em>S</em> is diagonal with nonnegative singular values. 
        The right singular vectors in <em>V</em> correspond exactly to the eigenvectors of the covariance matrix <em>C</em>, that is, the principal axes, and the left singular vectors <em>U</em> (scaled by <em>S</em>) correspond to the principal components. 
        The singular values relate to the eigenvalues by:
        </p>

        <p className="text-center text-lg text-gray-800 font-semibold mb-6">
        <em>λ</em><sub><em>i</em></sub> = <em>s</em><sub><em>i</em></sub><sup>2</sup> / (<em>n</em>−1)
        </p>

        <p className="text-lg text-gray-700 mb-6">
        Geometrically, SVD expresses <em>X</em> as a rotation, followed by axis-aligned scaling, and another rotation, providing a clean visualization of how PCA &quot;rotates&quot; the data to align with its directions of greatest variance.
        </p>

        <p className="text-lg text-gray-700 mb-6">
        This equivalence reveals two complementary views of PCA: the covariance-based perspective explains what PCA achieves, identifying directions of maximal variance, while the SVD perspective explains how it achieves it, through orthogonal rotations and scalings that diagonalize the covariance structure. 
        Seeing PCA as a direct application of SVD unifies its statistical and geometric interpretations, and underscores that PCA is not just a variance-maximizing heuristic, but a precise linear-algebraic transformation that exposes the intrinsic structure of data.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
        Code Availability
        </h2>

        <p className="text-lg text-gray-700 mb-6">
        The code for this work is available on my{' '}
        <a 
            href="https://github.com/leahgibson/principal-component-analysis-crash-course" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
        >
            GitHub
        </a>
        .
        </p>

        </div>
        </main>
        <Footer />
    </>
  );
}