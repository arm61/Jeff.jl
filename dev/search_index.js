var documenterSearchIndex = {"docs":
[{"location":"objective/#objective.jl","page":"objective","title":"objective.jl","text":"","category":"section"},{"location":"objective/","page":"objective","title":"objective","text":"The code here is focused on optimisation and sampling","category":"page"},{"location":"objective/","page":"objective","title":"objective","text":"Jeff.nll(distribution::Distributions.MultivariateDistribution, model::Array{Float64, 1})","category":"page"},{"location":"objective/#Jeff.nll-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,Array{Float64,1}}","page":"objective","title":"Jeff.nll","text":"nll(distribution::Distributions.MultivariateDistribution, model::Array{Float64, 1})\n\nReturn the negative log-likelihood between the measured data and some model data. \n\nParameters\n\ndistribution::Distributions.MultivariateDistribution : the measured data. \nmodel::Array{Float64, 1} : the model data. \n\nReturns\n\n::Float64 : the negative log-likelihood.\n\n\n\n\n\n","category":"method"},{"location":"model/#model.jl","page":"model","title":"model.jl","text":"","category":"section"},{"location":"model/","page":"model","title":"model","text":"Objects and functions related to reflectometry models.","category":"page"},{"location":"model/","page":"model","title":"model","text":"Jeff.Parameter\nJeff.Layer\nJeff.convert_to_array(layers::Array{Jeff.Layer})","category":"page"},{"location":"model/#Jeff.Parameter","page":"model","title":"Jeff.Parameter","text":"Parameter(value::Float64, vary::Bool, prior::Distrbutions.UnivariateDistribution)\n\nA parameter that can be optimised in the analysis procress.\n\nParameters\n\nvalue::Float64 : the value for the given parameter.\nvary::Bool : should the parameter be varied in optimisation. \nprior::Distrbutions.UnivariateDistribution : the prior probability distribution for the parameter. If vary is false, then nothing can be passed as the prior.\n\n\n\n\n\n","category":"type"},{"location":"model/#Jeff.Layer","page":"model","title":"Jeff.Layer","text":"Layer(thick::Jeff.Parameter, sld::Jeff.Parameter, isld::Jeff.Parameter, rough::Jeff.Parameter)\n\nA description of a layer in a system. \n\nParameters\n\nthick::Jeff.Parameter : the layer thickness.\nsld::Jeff.Parameter : layer real scattering length density.\nisld::Jeff.Parameter : layer imaginary scattering length density.\nrough::Jeff.Parameter : roughness with layer above.\n\n\n\n\n\n","category":"type"},{"location":"model/#Jeff.convert_to_array-Tuple{Array{Jeff.Layer,N} where N}","page":"model","title":"Jeff.convert_to_array","text":"convert_to_array(layers::Array{Jeff.Layer})\n\nConvert from a array of Jeff.Layer objects to an array that is compatible with reflect.jl functions.\n\nParameters\n\nlayers::Array{Jeff.Layer} : an array of Jeff.Layer objects.\n\nReturns\n\n::Array{Float64, 2} : a two-dimensional array that is compatible with the reflect.jl functions.\n\n\n\n\n\n","category":"method"},{"location":"data/#data.jl","page":"data","title":"data.jl","text":"","category":"section"},{"location":"data/","page":"data","title":"data","text":"Functions to import experimental datasets and store them as Jeff.Data objects. ","category":"page"},{"location":"data/","page":"data","title":"data","text":"Jeff.read_data(filename::String; delim=nothing, dq::Float64=0.05, dR::Float64=0.1)\nJeff.Data","category":"page"},{"location":"data/#Jeff.read_data-Tuple{String}","page":"data","title":"Jeff.read_data","text":"read_data(filename::String; delim=nothing, dq::Float64=0.05, dR::Float64=0.1)\n\nRead experimental data from a file and store in a Jeff.Data object. \n\nParameters\n\nfilename::String : the file path to be read in. \ndelim::AbstractChar : the delimiting character in the input file. If the file is whitespace delimited, pass nothing. Defaults to nothing.\ndq::Float64 : percentage q-vector uncertainty, if not present in file. Defaults to 5..\ndR::Float64 : percentage reflected intensity uncertainty, if not present in file. Defaults to 10..\n\nReturns\n\n::Jeff.Data : a data object containing the relevant information.\n\n\n\n\n\n","category":"method"},{"location":"data/#Jeff.Data","page":"data","title":"Jeff.Data","text":"Data(q::Array{Measurements.Measurement}, R::Array{Measurements.Measurement}, distribution::Distributions.MultivariateDistribution, filepath::String)\n\nThe struct for storing experimental datasets. \n\nParameters\n\nq::Array{Measurement} : the q-vector values, including dq uncertainty.\nR::Array{Measurement} : the reflected intensity values, including uncertainty.\nfilepath::String : the file path for the file. \n\n\n\n\n\n","category":"type"},{"location":"#Jeff.jl-Documentation","page":"Home","title":"Jeff.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Jeff is a Julia package for the analysis of neutron and X-ray reflectometry. Currently, Jeff is being developed by Andrew as a way to: ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Learn to program in Julia\nUtilise more fully a probabilistic analysis paradigm for reflectometry","category":"page"},{"location":"","page":"Home","title":"Home","text":"There is no promise of long-term support.","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Andrew R. McCluskey","category":"page"},{"location":"reflect/#reflect.jl","page":"reflect","title":"reflect.jl","text":"","category":"section"},{"location":"reflect/","page":"reflect","title":"reflect","text":"These functions are focused on the calculation of a reflectometry profile from an abstract set of layers. ","category":"page"},{"location":"reflect/","page":"reflect","title":"reflect","text":"Jeff.constant_smearing(q::Array{Float64, 1}, w::Array{Float64, 2}, resolution::Float64=0.5, scale::Float64=1., bkg::Float64=0.)\nJeff.abeles(q::Array{Float64, 1}, layers::Array{Float64, 2})\nJeff.same_convolution(a::Array{Float64, 1}, b::Array{Float64, 1})\nJeff.gauss(x::Array{Float64, 1}, s::Float64)","category":"page"},{"location":"reflect/#Jeff.abeles-Tuple{Array{Float64,1},Array{Float64,2}}","page":"reflect","title":"Jeff.abeles","text":"abeles(q::Array{Float64, 1}, layers::Array{Float64, 2})\n\nPerforms the Abeles optical matrix calculation.\n\nParameters\n\nq::Array{Float64, 1} : q-vector values.\nlayers::Array{Float64, 2} : an Nx4 array, where N is the number of layers in the system, 1st item in a given row is the thickness, the 2nd the SLD, the 3rd the imaginary SLD, and the 4th the roughness with the layer above.\n\nReturns\n\n::Array{Float64, 1} : unsmeared reflectometry values for the given q-vectors. \n\n\n\n\n\n","category":"method"},{"location":"reflect/#Jeff.same_convolution-Tuple{Array{Float64,1},Array{Float64,1}}","page":"reflect","title":"Jeff.same_convolution","text":"same_convolution(a::Array{Float64, 1}, b::Array{Float64, 1})\n\nPerforms a convolution of one-dimensional arrays equivalent to the np.convolve, where the mode is 'same'. \n\nParameters\n\na::Array{Float64, 1} : first array to convolve.\nb::Array{Float64, 1} : second array to convolve.\n\nReturns\n\n::Array{Float64, 1} : discrete, linear convolution of a and b. \n\n\n\n\n\n","category":"method"},{"location":"reflect/#Jeff.gauss-Tuple{Array{Float64,1},Float64}","page":"reflect","title":"Jeff.gauss","text":"gauss(x::Array{Float64, 1}, s::Float64)\n\nA Gaussian kernel for resolution smearing. \n\nParameters\n\nx::Array{Float64, 1} : the kernal positions.\ns::Float64 : the width of the kernel.\n\nReturns\n\n::Array{Float64, 1}: probabilities for x. \n\n\n\n\n\n","category":"method"}]
}
