/**
 * Member Service - Data Management with LocalStorage
 */

const STORAGE_KEYS = {
  MEMBER_INFO: 'itri_member_info',
  SUBMISSIONS: 'itri_submissions',
  SUBMISSION_COUNTER: 'itri_submission_counter'
};

class MemberService {
  getMemberInfo() {
    const data = localStorage.getItem(STORAGE_KEYS.MEMBER_INFO);
    return data ? JSON.parse(data) : this.getDefaultMemberInfo();
  }

  getDefaultMemberInfo() {
    return {
      name: '測試',
      nameEn: 'Test',
      email: '1126guanting@gmail.com',
      phone: '+886-927012867',
      industry: '電資通光',
      location: '台灣 台北',
      memberSince: '2023-10-28',
      status: '已認證'
    };
  }

  saveMemberInfo(info) {
    localStorage.setItem(STORAGE_KEYS.MEMBER_INFO, JSON.stringify(info));
  }

  getSubmissions(type = null) {
    const data = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
    const submissions = data ? JSON.parse(data) : [];
    
    if (type) {
      return submissions.filter(s => s.type === type);
    }
    return submissions;
  }

  addSubmission(submission, type = 'order') {
    const submissions = this.getSubmissions();
    const counter = this.getSubmissionCounter();
    
    const newSubmission = {
      ...submission,
      id: counter + 1,
      type: type,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };

    submissions.push(newSubmission);
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(submissions));
    localStorage.setItem(STORAGE_KEYS.SUBMISSION_COUNTER, String(counter + 1));

    return newSubmission;
  }

  getSubmissionCounter() {
    const counter = localStorage.getItem(STORAGE_KEYS.SUBMISSION_COUNTER);
    return counter ? parseInt(counter, 10) : 0;
  }

  deleteSubmission(id) {
    const submissions = this.getSubmissions();
    const filtered = submissions.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(filtered));
  }

  clearAllData() {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
}

export default new MemberService();
