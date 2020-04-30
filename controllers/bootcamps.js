// @desc    get all bootcamps
// @route   GET /api/bootcamps
// @access   public
exports.getBootcamps = (req ,res ,next) =>{
    res.status(200).json( { success: true, msg:`Display all the bootcamps`});  
}


// @desc    get single bootcamp
// @route   GET /api/bootcamps/:id
// @access   public
exports.getBootcamp = (req ,res ,next) =>{
    res.status(200).json( { success: true, msg:`Display bootcamp ${req.params.id}`});
}

// @desc    add new bootcamp
// @route   POST /api/bootcamps
// @access   private
exports.createBootcamp = (req ,res ,next) =>{
    res.status(200).json( { success: true, msg:`Create bootcamps  `});
}


// @desc    update  bootcamp
// @route   PUT /api/bootcamps/:id
// @access   private
exports.updateBootcamp = (req ,res ,next) =>{
    res.status(200).json( { success: true, msg:`Update bootcamp ${req.params.id}`});
}


// @desc    delete  bootcamp
// @route   DELETE /api/bootcamps/:id
// @access   private
exports.deleteBootcamp = (req ,res ,next) =>{
    res.status(200).json( { success: true, msg:`Delete bootcamp ${req.params.id}`});
}


