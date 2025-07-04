import User from "../models/User.js";

export async function getRecommendedUsers(req,res){

    try {
        const currentUserId = req.user.id;
        const currentUser = req.user;

        const recommendedusers = await User.find({
            $and:[
                {_id: {$ne : currentUserId} }, // exclude current user
                {$id: {$nin : currentUser.friends}}, // exclude existing friends
                {isOnBoarded : true}
            ],
        });

        res.status(200).json(recommendedusers);
    } catch (error) {
        console.log("Error in getRecommendedUsers: ", error);
        res.status(500).json({message : "Internal Srever Error"});
    }
}

export async function getMyfriends(req,res){

    try {
        const user = await User.findById(req.user.id)
        .select("friends")
        .populate("friends","fullname profilePic nativeLanguage learningLanguage");

        res.status(200).json(user.friends);
    } catch (error) {
        console.log("Error in getMyFriends: ", error);
        res.status(500).json({message : "Internal Srever Error"});
    }
}